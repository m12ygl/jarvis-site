# J.A.R.V.I.S. — public website

The public homepage, privacy policy and terms for **J.A.R.V.I.S.**, a privately developed personal AI assistant. These pages exist so Google's OAuth consent screen can link to an accurate homepage, privacy policy and terms.

This repository contains **only the public website**. It contains no application code, credentials, tokens, databases or personal data, and it must never contain any.

## Contents

| File | Purpose |
|---|---|
| `index.html` | Homepage |
| `privacy.html` | Privacy policy (Google OAuth) |
| `terms.html` | Terms |
| `assets/styles.css` | All styling (no external fonts or frameworks) |
| `assets/site.js` | Small enhancements: mobile menu, scroll reveal, footer year |
| `assets/favicon.svg` | Icon |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

All links are relative, so the site works at `https://m12ygl.github.io/jarvis-site/` (or any other folder or domain). There are no cookies, analytics or third-party requests, and every page sets a strict Content Security Policy.

## Before publishing

This check should print nothing (no unfinished placeholders):

```bash
grep -rn "\[\[CONFIRM" --exclude=README.md .
```

Keep the privacy policy true over time: model training must stay switched off in the ChatGPT account JARVIS uses (ChatGPT → Settings → Data controls → “Improve the model for everyone” → Off), or section 15 of `privacy.html` must be rewritten.

## Publish with GitHub Pages (free)

1. Sign in to [github.com](https://github.com) and create a **new public repository** named `jarvis-site`. Don't add a README or licence; this folder already has its files.
2. In Terminal:
   ```bash
   cd ~/Documents/jarvis-site
   git remote add origin https://github.com/m12ygl/jarvis-site.git
   git push -u origin main
   ```
   (The folder is already a Git repository with its commits.)
3. On GitHub, open the repository, then **Settings → Pages**.
4. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`**, then **Save**.
5. Wait a minute or two. The Pages settings screen shows **“Your site is live at …”** once it has deployed. Only then is the site published.

## Addresses for Google Cloud Console

In **Google Auth Platform → Branding**:

| Field | Address |
|---|---|
| Application home page | `https://m12ygl.github.io/jarvis-site/` |
| Application privacy policy link | `https://m12ygl.github.io/jarvis-site/privacy.html` |
| Application terms of service link | `https://m12ygl.github.io/jarvis-site/terms.html` |

Google may also ask you to verify ownership of the `m12ygl.github.io` domain if you submit the app for verification; that is not needed for the personal, unverified use described in the privacy policy.

## Updating the policy

If JARVIS's use of Google data changes, update `privacy.html` (including the effective date) **before** the change goes live, then commit and push. GitHub Pages republishes automatically.
