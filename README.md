# Project Name

One-line description of the website.

## Tech Stack

Built with HTML, CSS, and vanilla JavaScript. This was the right fit for a marketing site that updates infrequently — fast load times, free hosting, and minimal maintenance overhead. For sites that need client editing, a CMS would be the better choice.

## File Structure

### Core Files

- `index.html` — Homepage and main entry point
- `404.html` — Custom error page for broken or missing links
- `robots.txt` — Tells search engine crawlers what to index and where to find the sitemap
- `sitemap.xml` — Lists all indexable pages for search engines
- `favicon.svg` — Browser tab icon, in SVG for clean scaling

### Directories

- `css/styles.css` — Single stylesheet controlling layout, colors, typography, spacing, and responsiveness
- `css/reset.css` — Josh Comeau's modern CSS reset for consistent cross-browser baseline
- `js/main.js` — Handles mobile menu, animations, form submission, and scroll effects
- `fonts/` — Self-hosted .woff2 files for faster loads and privacy compliance
- `assets/img/` — All images and media

### Pages

- `pages/` — General informational pages (About, Terms, etc.)
- `services/` — Individual service pages, each targeting a specific service keyword for SEO
- `locations/` — City or region-specific landing pages for local search ranking
- `service-areas.html` — Hub page linking to all individual location pages

## Forms

Contact forms submit through Formspree, a third-party form handler. No backend server required. The endpoint should be domain-locked in the Formspree dashboard to only accept submissions from the client's domain.

## SEO

Each page includes:
- JSON-LD structured data
- Open Graph and Twitter Card metadata
- Unique title and meta description
- Canonical URL

## Local Development

No build step required. Open `index.html` directly, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Built By

DG Web Agency · Pasadena, CA · [dgwebagency.com](https://dgwebagency.com)
