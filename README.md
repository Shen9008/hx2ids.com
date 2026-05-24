# Hx2 Design Website

Official website for **Hx2 Design** (www.hx2ids.com) — a full-service interior design and construction firm based in Penang, Malaysia.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, stats, services overview, featured projects, process teaser |
| About | `about.html` | Company story, vision, strengths, service areas |
| Services | `services.html` | Four core services + unique propositions |
| Projects | `projects.html` | Full portfolio with residential/commercial filters |
| Process | `process.html` | Six-step design-to-handover workflow |
| Contact | `contact.html` | Enquiry form, contact details, Google Maps |

## Local Preview

Open any HTML file in a browser, or serve locally:

```bash
npx serve .
```

## Deployment

Static site — deploy to any static host (Cloudflare Pages, Netlify, GitHub Pages, etc.). Point `www.hx2ids.com` DNS to your host.

## Customization

- **Project images**: Replace Unsplash placeholders in `js/projects-data.js` with actual project photos from the company profile.
- **Contact form**: Wire `contact.html` form to Formspree, Netlify Forms, or your backend.
- **Logo**: Replace `images/favicon.svg` with official brand assets.

## Tech Stack

- Pure HTML / CSS / JavaScript (no build step required)
- Google Fonts: Cormorant Garamond + Outfit
- Responsive design (mobile-first)
