# aryoumehr.ir

**aryoumehr** is an open-source project designed to turn the simplest HTML pages into fully installable Progressive Web Apps (PWAs) — 100% free and hosted via GitHub Pages and Cloudflare CDN.

## Features

- Installable PWA (Add to Home Screen)
- Full offline support using Service Worker
- Lightweight, responsive design
- Free static hosting with GitHub Pages
- Custom domain support via a CNAME file
- Optimized for high traffic with Cloudflare CDN

## Project Structure

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


## How to Set Up

1. Fork or clone the repository.
2. Add your custom domain to the `CNAME` file.
3. Enable GitHub Pages in the repository settings (Settings > Pages > Source).
4. Connect your domain to GitHub via Cloudflare.
5. Optionally, modify the `manifest.json` and `sw.js` files to suit your project (change icons, colors, etc.).

## How to Test PWA Locally

1. Clone or fork the repository to your local machine.
2. Open `index.html` in a browser (preferably Chrome or Firefox).
3. Use browser developer tools to simulate mobile devices and inspect how the PWA works.
4. Use the "Add to Home Screen" option in the browser to install the PWA.

## Offline Support

The app uses a **service worker** (`sw.js`) to cache the necessary assets and provide offline functionality. If you are working on this project, remember to update the list of assets in the service worker as needed to ensure smooth offline usage.

## Author

**Website:** [aryoumehr.ir](https://aryoumehr.ir)  
**Email:** aryoumehr@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
