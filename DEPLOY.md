# Deploy — Studio Tahsin Portfolio

## Local status

- Git repo initialized in this folder
- Commit ready on `main` (Studio Tahsin Next.js rebuild)
- Remote: `https://github.com/Tahis-Fzs/full-stack-dynamic-portfolio`

The GitHub repo still has the **old Laravel CMS** on `main`. This push replaces it with the new portfolio.

---

## Option A — Replace `main` (recommended)

Run from this folder:

```bash
cd /Users/md.shadmantahsin/Desktop/Shadman-Tahsin-CV/full-stack-dynamic-portfolio

git push -u origin main --force-with-lease
```

This overwrites old Laravel history on `main` with the new Next.js portfolio.

---

## Option B — New branch + PR (safer)

```bash
git push -u origin main:studio-tahsin
gh pr create --base main --head studio-tahsin \
  --title "Studio Tahsin — Next.js portfolio rebuild" \
  --body "Replaces Laravel CMS with Studio Tahsin portfolio: dual mode, PayLite/StudentMove launch case studies, SEO, contact form."
```

Merge the PR on GitHub, then deploy.

---

## Vercel deploy

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import **`Tahis-Fzs/full-stack-dynamic-portfolio`**
3. Framework: **Next.js** (auto-detected)
4. Root directory: **`/`** (repo root)
5. Environment variables:

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://YOUR-PROJECT.vercel.app` (update after first deploy) |
| `RESEND_API_KEY` | Optional — for contact form email |
| `CONTACT_EMAIL` | `md.shadmantahsinfzs@gmail.com` |
| `CONTACT_FROM` | Your verified Resend sender |

6. Deploy → copy production URL → set `NEXT_PUBLIC_SITE_URL` → redeploy

---

## Post-deploy checklist

- [ ] Open `/` — test Recruiter + Engineer modes
- [ ] `/works/paylite-x` — live embed loads
- [ ] `/works/studentmove` — live embed loads
- [ ] `/resume` — PDF download works
- [ ] `/contact` — form submits (or mailto fallback)
- [ ] `/sitemap.xml` and `/robots.txt` reachable
- [ ] Pin repo on GitHub profile
- [ ] Add portfolio URL to CV and LinkedIn

---

## Local production test

```bash
npm run build
npm run start
# http://127.0.0.1:3000
```

---

## Custom domain (optional)

Vercel → Project → Settings → Domains → add e.g. `shadmantahsin.dev`

Update `NEXT_PUBLIC_SITE_URL` and redeploy.
