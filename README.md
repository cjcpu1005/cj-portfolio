# Creative Portfolio — Vercel-ready

A responsive cinematic portfolio for videography and graphic design, built with vanilla JavaScript and Vite.

## Edit your content

1. Open `main.js`.
2. Edit `profile` at the top (name, email, Instagram, Behance, bio).
3. Replace the sample entries in `projects` with your own work. Set each project's `type` to `video` or `design`.
4. Replace project `image` links with your own publicly hosted images (or local assets in `public/`).
5. For video entries, add a publicly accessible video link to `video`. Clicking the project opens details with a watch link.
6. To change the hero image, edit `.hero-image` in `style.css`. Replace the About placeholder with a photo if desired.
7. Customize the site name `FRAME` in `main.js`, and the browser title in `index.html`.

**Note:** All six sample projects and images are placeholders, not real work.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Create a GitHub repository and upload these files.
2. In Vercel, choose **Add New > Project**, then import your GitHub repository.
3. Vercel should detect Vite. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**. You will receive a `.vercel.app` URL.
5. Commit updates to your GitHub repository to redeploy.

## Notes

- External Unsplash image links and Google Fonts require internet access.
- The contact button opens the visitor's email app; it does not require a server.
- No account credentials, API keys, or paid hosting are required for the starter site.
