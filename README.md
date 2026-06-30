# Mubix Portfolio

React + Vite + Tailwind CSS v4 portfolio. Single-page, responsive, animated.

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
```
Output goes to `dist/`.

## Where to put your real links
- `src/data/projects.js` — LMS app (OneDrive link), Luxora, Mubix Labs, SaaS tool (license + Get Started/VS Code link)
- `src/data/socials.js` — social profile URLs + contact email
- `src/lib/firebase.js` — your Firebase project config (Console -> Project Settings)
- `src/components/sections/ChatWidget.jsx` — your free Gemini API key from https://aistudio.google.com/apikey

## Deploy (Vercel / Netlify)
- `vercel.json` and `public/_headers` already configure security headers (CSP, HSTS, X-Frame-Options, etc.) for both platforms.
- Update `index.html` canonical URL, `public/robots.txt`, and `public/sitemap.xml` if your final domain differs from hellomubeen.me.
- After deploying, submit `https://hellomubeen.me/sitemap.xml` to Google Search Console to get indexed.

## Performance notes
- The Three.js background only loads after the page is idle and only on screens >=768px — keeps mobile Lighthouse score high.
- Firebase SDK is dynamically imported only when a message is actually sent.
- Chat widget code-splits separately and loads lazily.
