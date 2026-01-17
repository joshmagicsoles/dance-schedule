// This is a minimal Service Worker to allow "Install" on Android
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // We leave this empty to ensure we always fetch live data from the internet
  // This satisfies the PWA requirement without risking "stale" schedules
});
