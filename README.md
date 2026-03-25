# CSS Frontier 2026

A living playground of cutting-edge CSS features. Every demo on this page is built with the feature it documents.

**[View Live Demo](https://zakelfassi.github.io/css-frontier-2026/)**

## Features

18 interactive experiments covering the CSS features rewriting the rules of the web:

| # | Feature | Status |
|---|---------|--------|
| 01 | Scroll-Driven Animations | Chrome 115+ |
| 02 | View Transitions API | Chrome 111+ / L2: 126+ |
| 03 | CSS Anchor Positioning | Chrome 127+ |
| 04 | @starting-style | Chrome 117+ |
| 05 | oklch + color-mix() + Relative Color | Chrome 111+ |
| 06 | Container Queries | Chrome 105+ |
| 07 | CSS Nesting | Chrome 120+ |
| 08 | @scope | Chrome 118+ |
| 09 | :has() Selector | Chrome 105+ |
| 10 | Popover API | Chrome 114+ |
| 11 | text-wrap: balance / pretty | Chrome 114+ |
| 12 | @property | Chrome 78+ |
| 13 | CSS Carousels | Chrome 135+ (Experimental) |
| 14 | Style Container Queries | Chrome 111+ |
| 15 | field-sizing | Chrome 120+ |
| 16 | Masonry Layout | Experimental (Flag) |
| 17 | Sibling Functions | Chrome 132+ |
| 18 | Customizable &lt;select&gt; | Chrome 134+ (Experimental) |

## Self-Referential Architecture

The page uses the features it teaches:

- **@layer** orchestrates the entire CSS cascade
- **@scope** isolates each section's demo styles
- **@property** powers the animated color system
- **oklch + color-mix()** drives all colors from a single `--hue-primary`
- **Scroll-driven animations** handle section entry reveals
- **Container queries** switch code/demo layouts
- **Popover + Anchor Positioning** power the TOC navigation
- **@starting-style** animates the TOC entry
- **CSS Nesting** used throughout all stylesheets

## Stack

- Zero build step
- No framework
- No JavaScript libraries (highlight.js for syntax coloring only)
- Pure HTML + CSS + vanilla JS
- GitHub Pages ready

## Development

Open `index.html` in Chrome 135+ for the full experience. That's it.

```sh
# Or use any static server
python3 -m http.server 8000
```

## Browser Support

Optimized for latest Chrome/Edge. Most features work in Safari 18+ and Firefox 146+. Experimental features (Carousels, Masonry, Customizable Select) require Chrome flags or latest Canary.

## License

MIT
