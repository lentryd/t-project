importScripts("/precache-manifest.128d61bf120600a66ee41cb3cb581a59.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// Обновления и всякое такое
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// Кэширование данных
workbox.core.setCacheNameDetails({ prefix: "t-project" });
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Офлайн доступ
workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL("index.html")
);

