Client Site Boilerplate

My go-to starting point for building client websites. Plain HTML, CSS, and vanilla JS — no frameworks, no build tools, no dependencies.


Structure
css/
  colors.css          - Brand color variables
  components.css      - Buttons, cards, forms, etc.
  layout.css          - Grid, containers, spacing
  main.css            - Imports all stylesheets
  reset.css           - Browser reset / normalize
  responsive.css      - Media queries and breakpoints
  variables.css       - Font sizes, spacing, shared values

js/
  hamburger.js        - Mobile nav toggle
  tracking.js         - Analytics setup

assets/
  img/                - Site images
  logos/               - Client logos and branding

pages/
  404.html            - Custom error page
  privacy.html        - Privacy policy
  terms.html          - Terms of service
How I Use It

Clone the repo
Update variables.css and colors.css with client branding
Build out index.html using the existing component and layout classes
Add pages as needed
Deploy

What's Included

CSS reset for consistent cross-browser rendering
Responsive grid system
Mobile hamburger nav
SEO basics: sitemap.xml, robots.txt, favicon
Legal page templates (privacy, terms, 404)
Analytics tracking ready to configure