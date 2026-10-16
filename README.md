# Marco Murati: Portfolio

My personal portfolio website, built with plain HTML, CSS and JavaScript and hosted on GitHub Pages.

**Live site:** https://marcomurati05-blip.github.io

## Features

- A hanging lamp you can click to switch on and off. It sways gently, and the whole page dims when it's off.
- Dust drifting through the lamplight, drawn on an HTML canvas
- A greeting whose letters rise into place when the page opens
- A background that slowly shifts from dusk to evening as you scroll
- A timeline whose lamps light up one by one as you scroll past them
- Light and dark themes that follow the visitor's device settings
- Accessible: keyboard focus outlines, screen-reader text, and reduced motion for visitors who turn animations off
- No frameworks or libraries; everything is in a single `index.html`

## How it works

| Part | Technique |
| --- | --- |
| Lamp and espresso cup | Inline SVG with gradients |
| Light beam | CSS `conic-gradient` with a mask |
| Dust | `<canvas>` animated with `requestAnimationFrame` |
| Lamp swing | A sine wave plus a decaying "kick" when you click |
| Scroll effects | `IntersectionObserver` and a throttled scroll listener |
| Themes | CSS custom properties and `prefers-color-scheme` |

## Design

Headings use Alegreya and body text uses Alegreya Sans, both from Google Fonts.

## What I learned

<!-- Fill this in yourself, e.g. what was tricky, what you'd do differently -->
