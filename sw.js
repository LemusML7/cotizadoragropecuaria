const CACHE_NAME = 'cotizador-v1';
const urlsToCache = ['./', './index.html', './manifest.json', './launchericon-192x192.png', './launchericon-512x512.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
