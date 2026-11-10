/* warp mafia drop bar — shown on every page until the end of Cyber Monday.
   Before launch (Fri 27 Nov, 10:00 Berlin): "remind me" → Tally form.
   Launch weekend through Mon 30 Nov: "out now" → editions on Available Works.
   From Tue 1 Dec 00:00 Berlin: hidden. Delete this file and its <script> tags any time after. */
(function () {
  var now = Date.now();
  var LAUNCH = Date.UTC(2026, 10, 27, 9, 0);   // 27 Nov 10:00 Berlin
  var END = Date.UTC(2026, 10, 30, 23, 0);     // 1 Dec 00:00 Berlin
  if (now >= END || !document.body) return;

  var live = now >= LAUNCH;
  var href = live ? '/available-works/#editions' : 'https://tally.so/r/vXr5Pv';
  var text = live ? 'warp mafia is out now' : 'warp mafia drops friday nov 27';
  var cta = live ? 'collect &rarr;' : 'remind me &rarr;';

  var css = '.drop-bar{display:block;background:#111;color:#fff !important;text-align:center;' +
    "font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;line-height:1.5;" +
    'letter-spacing:.1em;text-transform:uppercase;padding:9px 20px;text-decoration:none !important;border:0;margin:0}' +
    '.drop-bar span{border-bottom:1px solid #fff;padding-bottom:1px;font-weight:700;margin-left:6px}' +
    '.drop-bar:hover{background:#e8321a}';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  document.body.insertAdjacentHTML('afterbegin',
    '<a class="drop-bar" href="' + href + '"' + (live ? '' : ' target="_blank" rel="noopener"') + '>' +
    text + ' &middot;<span>' + cta + '</span></a>');
})();
