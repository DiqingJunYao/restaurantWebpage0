# Oliva restaurant

A responsive, static restaurant concept. HTML, vanilla JavaScript, SCSS, and compiled CSS. All branding, menu prices, opening hours, address, and email are sample content.

## Get started

```bash
npm install
npm run build
npm run dev
```

Open http://127.0.0.1:5173. You can also open `index.html` directly after building: CSS, JavaScript, and images use relative paths and require no server. `dist/` contains the deployable static site.

## Edit

- `index.html`: restaurant name, menu, contact information, hours, image comments, and accessible photo descriptions. Replace `hello@example.com` before using the enquiry link.
- `src/scss/main.scss`: all styling, colors, layout, responsive breakpoints. Run `npm run build` after changes, or `npm run watch:css` while editing.
- `src/css/main.css`: compiled CSS actually loaded by the page, included in source for direct opening.
- `src/images/`: local sample photos. See its README for the image-to-section mapping.
- `src/main.js`: mobile navigation and menu filters.

The table enquiry opens the visitor's email client. This static site has no booking backend and does not confirm reservations. No remote fonts or runtime libraries are required.
