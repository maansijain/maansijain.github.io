/* Site analytics: Google is contacted only after affirmative consent. */
(() => {
  'use strict';
  const id = 'G-5XNQZ1897M';
  const key = 'mj-analytics-consent-v2';
  const lifetime = 180 * 86400000;
  const workshops = {
    '1464155': 'draw-otherwise',
    '1466996': 'words-become-art',
    '1469918': 'make-the-ordinary-strange',
    '1469937': 'perform-the-image'
  };
  let consent = null;
  let loaded = false;
  const denied = { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' };
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (saved && Date.now() - saved.time < lifetime && ['granted', 'denied'].includes(saved.value)) consent = saved.value;
  } catch (_) { /* Storage may be unavailable; consent then lasts this page only. */ }
  window.dataLayer = window.dataLayer || [];
  const tag = function () { window.dataLayer.push(arguments); };
  tag('consent', 'default', denied);
  window['ga-disable-' + id] = consent !== 'granted';

  function start() {
    window['ga-disable-' + id] = false;
    tag('consent', 'update', { ...denied, analytics_storage: 'granted' });
    if (loaded) return;
    loaded = true;
    tag('js', new Date());
    tag('config', id, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: 15552000,
      cookie_update: false,
      page_location: location.origin + location.pathname,
      page_referrer: safeReferrer()
    });
    tag('event', 'page_view', { page_location: location.origin + location.pathname, page_referrer: safeReferrer() });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.append(script);
  }
  function safeReferrer() {
    try { return new URL(document.referrer).origin + '/'; } catch (_) { return ''; }
  }
  function clearCookies() {
    const host = location.hostname.split('.');
    const domains = ['', ...host.map((_, i) => host.slice(i).join('.'))];
    document.cookie.split(';').forEach(cookie => {
      const name = cookie.trim().split('=')[0];
      if (!/^_ga(?:_|$)/.test(name)) return;
      domains.forEach(domain => {
        document.cookie = name + '=; Max-Age=0; path=/' + (domain ? '; domain=' + domain : '');
      });
    });
  }
  const panel = document.createElement('section');
  panel.id = 'mj-consent';
  panel.setAttribute('aria-label', 'Analytics preferences');
  panel.innerHTML = '<strong>Website analytics</strong><p>May we use Google Analytics cookies to understand page visits, link clicks and interactions with this site? Google processes browsing and device information. Advertising features are disabled. Your choice is remembered for six months. You can change it at any time.</p><p><a href="/analytics-privacy.html">Analytics privacy details</a></p><div><button type="button" data-choice="denied">Decline analytics</button><button type="button" data-choice="granted">Allow analytics</button><button type="button" data-close hidden>Close</button></div>';
  const settings = document.createElement('button');
  settings.type = 'button';
  settings.id = 'mj-privacy-settings';
  settings.textContent = 'Analytics preferences';
  settings.setAttribute('aria-controls', panel.id);
  function visibility(open) {
    panel.hidden = !open;
    settings.setAttribute('aria-expanded', String(open));
    panel.querySelector('[data-close]').hidden = consent === null;
  }
  function choose(value, persist = true) {
    consent = value;
    if (persist) {
      try { localStorage.setItem(key, JSON.stringify({ value, time: Date.now() })); } catch (_) {}
    }
    if (value === 'granted') start();
    else {
      window['ga-disable-' + id] = true;
      tag('consent', 'update', denied);
      clearCookies();
    }
    visibility(false);
  }
  settings.addEventListener('click', () => { visibility(true); panel.querySelector('button').focus(); });
  panel.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.dataset.choice) choose(button.dataset.choice);
    else visibility(false);
    settings.focus();
  });
  panel.addEventListener('keydown', event => {
    if (event.key === 'Escape' && consent !== null) { visibility(false); settings.focus(); }
  });
  document.body.append(panel, settings);
  visibility(consent === null);
  if (consent === 'granted') start();
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    let saved;
    try { saved = JSON.parse(event.newValue); } catch (_) {}
    choose(saved && saved.value === 'granted' && Date.now() - saved.time < lifetime ? 'granted' : 'denied', false);
  });
  function emit(name, params) {
    if (consent !== 'granted') return;
    tag('event', name, { ...params, page_location: location.origin + location.pathname, transport_type: 'beacon' });
  }
  function linkClick(event) {
    if (consent !== 'granted' || (event.type === 'auxclick' && event.button !== 1)) return;
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest('a[href]');
    if (!link) return;
    let url;
    try { url = new URL(link.href, location.href); } catch (_) { return; }
    if (!['http:', 'https:', 'mailto:', 'tel:'].includes(url.protocol)) return;
    const placement = link.closest('.gallery') ? 'gallery' : link.closest('.hero') ? 'hero' : link.closest('footer') ? 'footer' : link.closest('nav') ? 'navigation' : 'content';
    const kind = url.protocol === 'mailto:' ? 'email' : url.protocol === 'tel:' ? 'phone' : url.origin !== location.origin ? 'external' : url.pathname === location.pathname && url.hash ? 'anchor' : 'internal';
    // Never send email addresses, phone numbers, query values or fragment values.
    emit('site_link_click', {
      link_kind: kind,
      link_destination: ['email', 'phone'].includes(kind) ? url.protocol : url.origin + url.pathname,
      link_placement: placement,
      link_id: link.dataset.analyticsId || 'link-' + Array.from(document.querySelectorAll('a[href]')).indexOf(link)
    });
    if (!/(^|\.)getyourguide\.com$/.test(url.hostname)) return;
    const match = url.pathname.match(/-t(\d+)(?:\/|$)/);
    const workshop = match && workshops[match[1]];
    if (!workshop) return;
    emit('workshop_booking_click', {
      workshop_slug: workshop,
      booking_provider: 'getyourguide',
      link_placement: placement,
      page_location: location.origin + location.pathname,
      transport_type: 'beacon'
    });
    // No preventDefault: normal, keyboard, modified and new-tab clicks retain their behaviour.
  }
  document.addEventListener('click', linkClick);
  document.addEventListener('auxclick', linkClick);
  document.addEventListener('click', event => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest('button');
    if (!button || button.closest('#mj-consent') || button === settings) return;
    // Identify controls, never inspect input values or quiz answers.
    emit('site_button_click', { control_id: button.dataset.analyticsId || button.id || 'button-' + Array.from(document.querySelectorAll('button')).indexOf(button) });
  });
  const depths = new Set();
  window.addEventListener('scroll', () => {
    if (consent !== 'granted') return;
    const height = document.documentElement.scrollHeight - innerHeight;
    if (height <= 0) return;
    const percent = 100 * scrollY / height;
    [25, 50, 75, 90].forEach(depth => {
      if (percent >= depth && !depths.has(depth)) {
        depths.add(depth);
        emit('site_scroll_depth', { percent_scrolled: depth });
      }
    });
  }, { passive: true });
})();
