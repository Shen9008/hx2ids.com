# Hx2 Design Website v2

Modern redesign for **www.hx2ids.com** — a React + Tailwind + Framer Motion site inspired by [21st.dev](https://21st.dev) component patterns.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** — beige & dark grey design system
- **Framer Motion** — scroll reveals, parallax hero, animated filters
- **Lucide React** — icons (shadcn/21st convention)
- **Cloudflare Pages** — static deploy from `dist/`

## Features

- Glassmorphism floating navbar with hero-aware light/dark modes
- Parallax hero with gradient typography
- Infinite location marquee
- Bento grid services layout
- Interactive project grid with animated filters & modal
- Animated process timeline
- Glass contact form card

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run deploy   # build + Cloudflare Pages deploy
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services |
| `/projects` | Portfolio |
| `/process` | Our Process |
| `/contact` | Contact |

## Cloudflare Pages

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **SPA routing:** `public/_redirects`
