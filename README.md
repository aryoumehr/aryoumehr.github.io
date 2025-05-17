# aryoumehr.ir

**aryoumehr** is an open-source project crafted to transform minimal HTML pages into fully installable, offline-capable Progressive Web Apps (PWAs). It’s 100% free to use and deploy — powered by GitHub Pages and optimized via Cloudflare CDN.

## Features

- Installable PWA (Add to Home Screen)
- Offline support using Service Worker
- Mobile-first, lightweight responsive design
- Static hosting with GitHub Pages
- Custom domain support (`CNAME` ready)
- CDN-level optimization with Cloudflare

## Folder Structure

```
public/
├── index.html
├── style.css
├── manifest.json
├── sw.js
├── icon.png
├── app.js
├── CNAME
├── assets/
│ ├── pwa/
│ │ ├── icon-72x72.png
│ │ ├── icon-96x96.png
│ │ ├── icon-128x128.png
│ │ ├── icon-144x144.png
│ │ ├── icon-192x192.png
│ │ ├── icon-256x256.png
│ │ ├── icon-512x512.png
│ │ ├── bookmark-96x96.png
│ │ └── news-96x96.png
│ ├── screenshots/
│ │ ├── 1.png
│ │ ├── 2.png
│ │ └── 3.png
```

## Getting Started

1. **Fork** or **clone** this repository.
2. Add your custom domain to the `CNAME` file.
3. Go to `Settings > Pages > Source` and enable GitHub Pages.
4. Configure your domain with GitHub via Cloudflare (DNS > CNAME).
5. (Optional) Modify `manifest.json` and `sw.js` for branding and functionality.

## Local PWA Testing

1. Clone the repo.
2. Open `index.html` directly in Chrome or Firefox.
3. Use DevTools to emulate mobile view.
4. Trigger "Add to Home Screen" to install.

## Offline Support

All key assets are cached via `sw.js` service worker. Make sure to keep this file updated with any new or renamed resources to retain offline functionality.

## License

This project is released under the [MIT License](LICENSE) with one essential requirement:

**Attribution is mandatory.** You **must credit Aryoumehr** in any redistribution, fork, or derivative of this work.

## Author

Developed with dedication by:

**Aryoumehr**  
Website: [aryoumehr.ir](https://aryoumehr.ir)  
Email: [aryoumehr@gmail.com](mailto:aryoumehr@gmail.com)
