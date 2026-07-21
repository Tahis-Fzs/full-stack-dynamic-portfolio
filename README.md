# Studio Tahsin — Portfolio

**Industry-grade portfolio** for Md. Shadman Tahsin — Problem → Approach → Impact case studies, dual Recruiter/Engineer modes, and live demos for [PayLite X](https://paylite-web.onrender.com) & [StudentMove](https://studentmove-app-d866.onrender.com).

## Stack

- **Next.js 15** · React 19 · TypeScript · Tailwind CSS 4
- **Three.js / R3F** — Engineer mode constellation (lazy-loaded)
- **Lenis** — smooth scroll in Engineer mode
- **Server Actions** — contact form (optional Resend)

## Quick start

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000)

## Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL for SEO (e.g. Vercel domain) |
| `RESEND_API_KEY` | Optional | Enables contact form email delivery |
| `CONTACT_EMAIL` | Optional | Inbox for form submissions |
| `CONTACT_FROM` | Optional | Verified Resend sender address |

Without `RESEND_API_KEY`, the contact form still works and directs users to `mailto:`.

## Scripts

```bash
npm run dev      # development (Turbopack)
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Project structure

```
content/           # site.ts, projects.ts, case studies, resume
src/app/           # routes (works, about, resume, contact)
src/components/    # UI, engineer constellation, case studies
public/cv/         # downloadable PDF
styles/tokens.css  # design tokens
CREATIVE_BRIEF.md  # creative lock document
```

## Deploy (Vercel)

1. Push this folder to GitHub repo `full-stack-dynamic-portfolio`
2. Import project in [Vercel](https://vercel.com)
3. Set `NEXT_PUBLIC_SITE_URL` to your production URL
4. (Optional) Add Resend env vars for contact email
5. Deploy

## Flagship links

| Project | Live | Case study |
|---------|------|------------|
| PayLite X | [paylite-web.onrender.com](https://paylite-web.onrender.com) | `/works/paylite-x` |
| StudentMove | [studentmove-app-d866.onrender.com](https://studentmove-app-d866.onrender.com) | `/works/studentmove` |

## CV PDF

Regenerate from the sibling CV workspace, then copy:

```bash
cp ../Md_Shadman_Tahsin_CV.pdf public/cv/Md_Shadman_Tahsin_CV.pdf
```

## Author

**Md. Shadman Tahsin** — CSE graduate · Full-stack · Mobile · Applied ML

- GitHub: [Tahis-Fzs](https://github.com/Tahis-Fzs)
- LinkedIn: [md-shadman-tahsin](https://linkedin.com/in/md-shadman-tahsin-676a862b4)
