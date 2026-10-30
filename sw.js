/* Station 6 — service worker（GitHub Pages 子路徑，全部用相對路徑） */
const CACHE_VERSION = 'v6-3-8a';
const CACHE_NAME = 'travel-app-' + CACHE_VERSION;
const SHELL_URLS = [
  './index.html',
  './style.css',
  './app.js',
  './manifest.webmanifest',
  './travel-backup-20261030.json',
  './sw.js',
  './assets/covers/bangkok.png',
  './assets/covers/kyushu.png',
  './assets/decor/deco-cat-budget.png',
  './assets/decor/deco-cat-prep.png',
  './assets/decor/deco-cat-shop.png',
  './assets/icons/icon-192.svg',
  './assets/icons/icon-512.svg',
  './assets/shop/shop-boy.png',
  './assets/shop/shop-girl.png',
  './assets/stickers/pets/sticker-dog-chaimaru.png',
  './assets/stickers/pets/sticker-dog-chocolate-pose2.png',
  './assets/stickers/pets/sticker-dog-chocolate.png',
  './assets/stickers/pets/sticker-dog-white-tan-pose2.png',
  './assets/stickers/pets/sticker-dog-white-tan.png',
  './assets/stickers/sticker-dog-01.png',
  './assets/stickers/sticker-dog-02.png',
  './assets/stickers/sticker-dog-03.png',
  './assets/stickers/sticker-dog-04.png',
  './assets/stickers/sticker-dog-05.png',
  './assets/stickers/sticker-dog-06.png',
  './assets/stickers/sticker-dog-07.png',
  './assets/stickers/sticker-dog-08.png',
  './assets/stickers/sticker-dog-09.png',
  './assets/stickers/sticker-dog-10.png',
  './assets/stickers/sticker-dog-11.png',
  './assets/stickers/sticker-dog-12.png',
  './assets/stickers/sticker-jp-01.png',
  './assets/stickers/sticker-jp-02.png',
  './assets/stickers/sticker-jp-03.png',
  './assets/stickers/sticker-jp-04.png',
  './assets/stickers/sticker-jp-05.png',
  './assets/stickers/sticker-jp-06.png',
  './assets/stickers/sticker-jp-07.png',
  './assets/stickers/sticker-jp-08.png',
  './assets/stickers/sticker-th-01.png',
  './assets/stickers/sticker-th-02.png',
  './assets/stickers/sticker-th-03.png',
  './assets/stickers/sticker-th-04.png',
  './assets/stickers/sticker-th-05.png',
  './assets/stickers/sticker-th-06.png',
  './assets/vendor/sortable.min.js'
];

async function precache() {
  const cache = await caches.open(CACHE_NAME);
  await Promise.all(SHELL_URLS.map(async (url) => {
    try {
      const res = await fetch(url, { cache: 'reload' });
      if (res && res.ok) await cache.put(url, res);
      else console.warn('[sw] skip', url, res && res.status);
    } catch (e) {
      console.warn('[sw] fail', url, e);
    }
  }));
}

self.addEventListener('install', event => {
  event.waitUntil(precache().then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k.startsWith('travel-app-') && k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

function shouldBypass(url) {
  const host = url.hostname;
  if (host.includes('open-meteo.com')) return true;
  if (host.includes('google.com') || host.includes('googleapis.com') || host.includes('gstatic.com')) return true;
  if (host.includes('maps.google')) return true;
  if (host.includes('jsdelivr.net')) return true;
  return false;
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (e) { return; }
  if (shouldBypass(url)) return;

  if (url.origin !== self.location.origin) {
    event.respondWith(fetch(req).catch(() => caches.match(req)));
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => {
        if (req.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return caches.match(req);
      });
    })
  );
});
