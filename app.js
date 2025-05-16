document.addEventListener('DOMContentLoaded', () => {
  console.log('Aryoumehr PWA ready.');

  let deferredPrompt;

  // بررسی اینکه آیا رویداد 'beforeinstallprompt' پشتیبانی می‌شود یا نه
  if ('beforeinstallprompt' in window) {
    window.addEventListener('beforeinstallprompt', (e) => {
      // جلوگیری از نمایش دیالوگ پیش‌فرض نصب
      e.preventDefault();
      // ذخیره رویداد برای استفاده بعدی
      deferredPrompt = e;

      // نمایش دکمه نصب (در صورت نیاز)
      const installBtn = document.querySelector('button');
      if (installBtn) {
        installBtn.style.display = 'block';
        installBtn.addEventListener('click', () => {
          // نمایش دیالوگ نصب
          deferredPrompt.prompt();

          // پس از انتخاب کاربر، وضعیت انتخاب را چک کنیم
          deferredPrompt.userChoice.then((choiceResult) => {
            console.log(`User choice: ${choiceResult.outcome}`);
            deferredPrompt = null;
          });
        });
      }
    });
  } else {
    console.log('PWA install prompt not supported.');
  }
});
