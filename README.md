# Panagiotis Pavlidis Consulting Website

Astro consulting website for a technical consultant focused on reliable software systems, backend APIs, cloud-native platforms, Kubernetes delivery, integration work, telecom-grade specialization, and AI-assisted engineering workflows.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages

The project includes `.github/workflows/deploy.yml` using the official Astro GitHub Pages action.

Update `astro.config.mjs` before publishing if the deployment target changes:

- Set `site` to the final GitHub Pages URL.
- The current config is set for a GitHub Pages project repo named `panagiotis_pavlidis`.
- With GitHub user `panos-ece`, the expected URL is `https://panos-ece.github.io/panagiotis_pavlidis/`.
- If deploying from a `username.github.io` repository or a custom domain, remove `base`.

## First GitHub Pages Publish

1. Create a public GitHub repository named `panagiotis_pavlidis`.
2. Initialize and push this project:

```bash
git init
git add .
git commit -m "Initial consulting website"
git branch -M main
git remote add origin https://github.com/panos-ece/panagiotis_pavlidis.git
git push -u origin main
```

3. In GitHub, open the repository settings.
4. Go to **Pages**.
5. Set **Source** to **GitHub Actions**.
6. Open the **Actions** tab and confirm the `Deploy to GitHub Pages` workflow completes.
7. Visit `https://panos-ece.github.io/panagiotis_pavlidis/`.

The profile photo is stored at `public/profile-photo.jpg`.
