// Run with Node and Playwright; CHROMIUM_PATH may specify a local Chromium binary.
const { chromium } = require('playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
(async () => {
 const server = http.createServer((req, res) => {
  let file = path.join(root, new URL(req.url, 'http://localhost').pathname);
  if (file.endsWith('/')) file += 'index.html';
  if (!fs.existsSync(file)) { res.writeHead(404).end(); return; }
  res.setHeader('Content-Type', file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : 'text/html');
  res.end(fs.readFileSync(file));
 });
 await new Promise(r => server.listen(0, '127.0.0.1', r));
 const base = 'http://127.0.0.1:' + server.address().port;
 let browser;
 try {
  browser = await chromium.launch({headless:true, executablePath:process.env.CHROMIUM_PATH || undefined,args:['--no-sandbox','--disable-gpu','--disable-dev-shm-usage']});
  const context = await browser.newContext({viewport:{width:390,height:844}});
  let googleRequests = 0;
  await context.route('**/*', route => {
   if (route.request().url().startsWith(base)) return route.continue();
   if (/googletagmanager|google-analytics/.test(route.request().url())) googleRequests++;
   return route.fulfill({status:200,body:'',contentType:'text/javascript'});
  });
  const page = await context.newPage();
  await page.goto(base + '/workshops/make-the-ordinary-strange/?private=test#private');
  await page.locator('#mj-consent').waitFor();
  assert.equal(googleRequests,0);
  assert.equal((await context.cookies()).length,0);
  await page.locator('[data-choice="denied"]').click();
  await page.reload();
  assert.equal(await page.locator('#mj-consent').isVisible(),false);
  assert.equal(googleRequests,0);
  await page.locator('#mj-privacy-settings').click();
  await page.locator('[data-choice="granted"]').click();
  await page.waitForFunction(() => document.querySelector('script[src*="googletagmanager"]'));
  const events = () => page.evaluate(() => dataLayer.map(x=>Array.from(x)));
  let commands = await events();
  assert.equal(commands.filter(x=>x[0]==='event' && x[1]==='page_view').length,1);
  assert(!JSON.stringify(commands).includes('private=test'));
  assert.equal(await page.locator('script[src*="googletagmanager"]').count(),1);
  // Cancel navigation after the production listener has recorded the actual DOM click.
  await page.evaluate(() => document.addEventListener('click',e=>{if(e.target.closest('a'))e.preventDefault()}));
  for (const [product,slug] of [['1464155','draw-otherwise'],['1466996','words-become-art'],['1469918','make-the-ordinary-strange'],['1469937','perform-the-image']]) {
   await page.evaluate(product=>{const a=document.createElement('a');a.href='https://www.getyourguide.com/berlin-l17/test-t'+product+'/';a.textContent='test';document.body.append(a);a.click();a.remove()},product);
   commands = await events();
   assert.equal(commands.at(-1)[2].workshop_slug,slug);
  }
  await page.locator('.hero .button').click();
  commands = await events();
  assert.equal(commands.at(-1)[2].link_placement,'hero');
  await page.locator('#mj-privacy-settings').click();
  await page.screenshot({path:'/tmp/analytics-mobile.png'});
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.evaluate(()=>document.cookie='_ga=sample;path=/');
  await page.locator('[data-choice="denied"]').click();
  assert.equal(await page.evaluate(()=>window['ga-disable-G-76FFL9MYB9']),true);
  assert.equal(await page.evaluate(()=>document.cookie.includes('_ga=')),false);
  const count = (await events()).filter(x=>x[1]==='workshop_booking_click').length;
  await page.locator('.hero .button').click();
  assert.equal((await events()).filter(x=>x[1]==='workshop_booking_click').length,count);
  await page.reload();
  assert.equal(await page.locator('script[src*="googletagmanager"]').count(),0);
  await page.setViewportSize({width:1440,height:900});
  await page.locator('#mj-privacy-settings').click();
  await page.screenshot({path:'/tmp/analytics-desktop.png'});
  console.log('PASS: initial denial, persistence, opt-in, page view, four workshops, placement, withdrawal, cookies, mobile overflow. External Google requests intercepted; no production test events sent.');
 } finally { if(browser) await browser.close(); server.close(); }
})().catch(e=>{console.error(e);process.exitCode=1});
