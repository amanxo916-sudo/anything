self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("qr-scanner-cache").then(cache => {
      return cache.addAll([
        "/anything/scanner.html"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
