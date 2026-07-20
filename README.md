# PT Khairani Sinergi Nusantara — Corporate Website

React + Vite corporate site for PT Khairani Sinergi Nusantara (KSN).

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — dev server & build
- **React Router** — client-side routing
- **Tailwind CSS v4** — design system

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start development server         |
| `npm run build`   | Production build → `dist/`       |
| `npm run preview` | Preview production build locally |

## Pages

| Route       | Page                                    |
| ----------- | --------------------------------------- |
| `/`         | Home                                    |
| `/about`    | About — vision, mission, SINERGI values |
| `/services` | Services — core service lines + process |
| `/team`     | Team                                    |
| `/contact`  | Contact — phone, email, address         |

## Assets

Source photos live in `Images/`. Built assets are served from `public/images/`. To refresh after updating source images:

```bash
cp Images/*.webp public/images/
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Vercel auto-detects Vite — no extra config needed (`vercel.json` is included for SPA routing).
4. Deploy.

**Build settings** (auto-detected):

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

## Project Docs

- `PRD.md` — product requirements
- `implementation_plan.md` — design & implementation plan
- `Company Profile Khairani Energi Nusantara_compressed.pdf` — company profile source
