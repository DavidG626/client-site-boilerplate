  ---
  # Project Name

  One-line description of the website.

  ## Tech Stack

  Pure HTML, CSS, and JavaScript — no frameworks, no dependencies, no build tools. This keeps the site fast, lightweight, and easy to
  maintain.

  ## File Structure

  ### Core Files

  - **`index.html`** — The homepage. This is the main entry point of the site.
  - **`404.html`** — Custom error page shown when a visitor lands on a broken or non-existent link. Keeps users on-brand instead of
  seeing a generic server error.
  - **`robots.txt`** — Tells search engine crawlers which pages to index and where to find the sitemap. Important for SEO.
  - **`favicon.svg`** — The small icon that appears in browser tabs and bookmarks. SVG format so it scales cleanly on any screen.

  ### Directories

  - **`css/`** — Contains `styles.css`, the single stylesheet that controls the entire site's visual design (layout, colors,
  typography, spacing, responsiveness).
  - **`css/reset.css`** Built on Josh Comeau's modern CSS reset for consistent cross-browser baseline.
  - **`js/`** — Contains `main.js`, which handles all interactive behavior (mobile menu, animations, form handling, scroll effects).
  - **`fonts/`** — Self-hosted font files. Fonts are stored locally rather than loaded from Google Fonts for faster page loads and
  better privacy compliance.
  - **`assets/img/`** — All images and media used across the site.

  ### Pages

  - **`pages/`** — General informational pages like About and Terms of Service.
  - **`services/`** — Individual service pages. Each page targets a specific service keyword for SEO and gives visitors detailed information about that offering.
  - **`locations/`** — City or region-specific landing pages. These help the business rank in local search results for each area served.
  - **`service-areas.html`** — Overview page listing all locations and service areas. Acts as a hub linking to individual location pages.

  ## Forms

  Contact forms submit through Formspree, a third-party form handler. No backend server is needed. The form endpoint should be locked in the Formspree dashboard to only accept submissions from the client's domain.

  ## SEO

  Each page includes structured data (JSON-LD schema), Open Graph tags for social sharing, and meta descriptions. These are critical for search engine visibility and how the site appears when shared on social media.

  ---