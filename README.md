# Vatsal K. Gurjar — Portfolio

> **Live →** [vatsalgurjar.vercel.app](https://vatsalgurjar.vercel.app)
> &nbsp;|&nbsp; **LinkedIn →** [linkedin.com/in/vatsalgurjar](https://linkedin.com/in/vatsalgurjar)
> &nbsp;|&nbsp; **Email →** vatsal1gurjar1@gmail.com

Multi-page developer portfolio built with **React 18 + Vite + TypeScript** and a fully animated Three.js terrain background. Showcases production work, open-source projects, skills, and a downloadable resume—all rendered on the client with zero backend.

---

## ✦ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18, TypeScript, Vite 6 |
| Routing | React Router v6 |
| 3D Background | Three.js, @react-three/fiber (lazy-loaded) |
| Animations | Framer Motion |
| Styling | Tailwind CSS v3, shadcn/ui |
| Resume | @react-pdf/renderer (lazy-loaded) |
| Forms | React Hook Form |
| Noise | simplex-noise |

---

## ✦ Pages

| Route | Description |
|---|---|
| `/` | Hero, metrics, "Currently Building" section |
| `/about` | Bio, background, and values |
| `/projects` | Project cards with live links and tech chips |
| `/projects/:slug` | Full project detail with screenshots |
| `/experience` | Timeline of roles at Rang Digitech LLC, Hexsociety, MSK Solutions |
| `/skills` | Skill matrix across languages, frontend, backend, and AI tools |
| `/certifications` | Google, Stanford, Anthropic certs |
| `/achievements` | Awards, competitions, and leadership highlights |
| `/contact` | Contact form |

---

## ✦ Performance Highlights

- **Three.js** (+ react-three-fiber) lazy-loaded into a separate `three-vendor` chunk — ~500 KB excluded from initial parse
- **@react-pdf/renderer** split into its own `pdf-vendor` async chunk
- `dist/` and `.vite/` are gitignored — no build artifacts ever committed
- `robots.txt` + `sitemap.xml` in `/public/` for Google indexing

---

## ✦ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev

# 3. Production build
npm run build
```

---

## ✦ Project Highlights

### Daily Reporting System — Rang Digitech LLC *(Jan 2026 – Present)*
Full-stack SaaS platform with React 18, FastAPI, PostgreSQL. Role-based approval workflows, KRA analytics, JWT auth, and Pydantic v2 schema validation. Serves 10–25 active users in production.

### Cloverse — AI Collaborative Learning Platform *(2024–25)*
Real-time WebRTC video, collaborative editing, and OpenAI-powered note summarisation and quiz generation. Auth0 authentication. Stack: React, Node.js, Express, MongoDB.

### Silence Sense *(Sep 2023 – Nov 2023)*
Gesture-to-text translation app (84% accuracy) for hearing and speech-impaired users. OpenCV + Mediapipe for hand tracking; Google Speech/Translation APIs for multimodal output.

---

## ✦ Resume Downloads

Two targeted versions available from the homepage:

- **IT Corporate Role** — Standard formatted professional DOCX
- **Startup / Growth Role** — High-impact execution & metrics DOCX

---

## ✦ License

Personal portfolio — all rights reserved. Feel free to fork for inspiration but do not copy content or present it as your own.
