// Service worker minimal — tujuannya hanya supaya browser mengizinkan aplikasi
// di-install sebagai PWA ("Add to Home Screen") dan terasa seperti native app.
// Sengaja tidak melakukan caching agresif supaya data gudang (dari Supabase)
// selalu yang terbaru — hanya meneruskan request apa adanya ke jaringan.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
