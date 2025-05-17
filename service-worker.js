const CACHE_NAME = 'aryoumehr-cache-v3'; // به‌روزرسانی نسخه کش
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  '/icon.png',
  'assets/pwa/icon-72x72.png',
  'assets/pwa/icon-96x96.png',
  'assets/pwa/icon-128x128.png',
  'assets/pwa/icon-144x144.png',
  'assets/pwa/icon-192x192.png',
  'assets/pwa/icon-256x256.png',
  'assets/pwa/icon-512x512.png',
  'assets/pwa/bookmark-96x96.png',
  'assets/pwa/news-96x96.png',
  'assets/screenshots/1.png',
  'assets/screenshots/2.png',
  'assets/screenshots/3.png',
  'offline.html' // افزودن صفحه آفلاین به کش
];

// نصب سرویس‌ورکر
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching essential files');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) // فوراً سرویس‌ورکر جدید فعال بشه
  );
});

// فعال کردن سرویس‌ورکر جدید
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  const cacheWhitelist = [CACHE_NAME]; // فقط از کش جدید استفاده می‌کنیم
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName); // کش‌های قدیمی حذف می‌شوند
          }
        })
      );
    }).then(() => self.clients.claim()) // این خط برای همگام‌سازی سریعتر با صفحات باز
  );
});

// پردازش درخواست‌های fetch و کش کردن آن‌ها
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // اگر فایل در کش موجود باشد، آن را برگردانیم
      if (response) {
        console.log('[Service Worker] Returning from cache:', event.request.url);
        return response;
      }

      // برای درخواست‌های پویا از شبکه استفاده می‌کنیم
      return fetch(event.request).then(fetchResponse => {
        // اگر پاسخ دریافت شد، آن را کش می‌کنیم
        return caches.open(CACHE_NAME).then(cache => {
          console.log('[Service Worker] Caching new resource:', event.request.url);
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      }).catch(() => {
        // در صورت آفلاین بودن، صفحه آفلاین را نمایش می‌دهیم
        if (event.request.mode === 'navigate') {
          console.log('[Service Worker] Showing offline page');
          return caches.match('offline.html');
        }
      });
    })
  );
});

// پشتیبانی از همگام‌سازی پس‌زمینه (Background Sync)
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      fetch('/api/sync')
        .then(response => response.json())
        .then(data => {
          console.log('[Service Worker] Data synced:', data);
        })
        .catch(err => console.log('[Service Worker] Background sync failed:', err))
    );
  }
});

// پشتیبانی از همگام‌سازی دوره‌ای (Periodic Sync)
self.addEventListener('periodicsync', event => {
  if (event.tag === 'periodic-sync') {
    event.waitUntil(
      fetch('/api/periodic-sync')
        .then(response => response.json())
        .then(data => {
          console.log('[Service Worker] Periodic data synced:', data);
        })
        .catch(err => console.log('[Service Worker] Periodic sync failed:', err))
    );
  }
});

// اطلاع‌رسانی‌های پوش (Push Notifications)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'You have a new message.',
    icon: 'assets/pwa/icon-192x192.png',
    badge: 'assets/pwa/icon-72x72.png'
  };
  
  event.waitUntil(
    self.registration.showNotification('New Notification', options)
  );
});
