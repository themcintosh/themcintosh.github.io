# Andrew McIntosh's Portfolio

This repository contains various web applications and projects.

## Projects

### Kensington Data Dashboard
Located at `/kensington` - A data dashboard displaying various datasets for the Kensington area.

### Swadesh Word Image Generator
Located at `/swadesh` - An interactive app that generates AI images from randomly combined words using OpenAI's DALL-E. Deployed separately at [swadesh-gamma.vercel.app](https://swadesh-gamma.vercel.app/).

### Phrase Combinatorics
Located at `/phrases` - An interactive tool for generating and interpreting phrase combinations. Deployed separately at [combi-phrases.vercel.app](https://combi-phrases.vercel.app/).

### Lick the Cone
Located at `/icecream` - A canvas-based ice cream cone simulation. Drag across the scoop to lick it (drag length and speed set the strength of the lick, carving a dent and shrinking the scoop), with a synthesized slurp sound on each lick. Drag elsewhere (or use the rotate buttons) to spin the cone and see how the licked side looks from other angles. Pure client-side HTML/CSS/JS, no build step or API required.

### Debut Novel Prize Configurator
Located at `/debut-prize-configurator` - An interactive tool for exploring the configuration space of American debut novelists recognised by the PEN/Hemingway Award for Debut Novel and the Center for Fiction First Novel Prize (2021-2025). Pure client-side HTML/CSS/JS, no build step or API required.

### National Rice Dish Creator
Located at `/rice-field` - An interactive morphological field for national rice dishes: sixteen parameters, 130 dishes, built to explore what the world's rice traditions do and roll combinations none of them have tried. Pure client-side HTML/CSS/JS, no build step or API required.

## Swadesh and Phrases deployment

Swadesh and Phrases are deployed as their own separate Vercel projects (not part of the GitHub Pages site this repo serves), each with its own serverless functions and configuration in `swadesh/` and `phrases/` respectively. See each project's own files (`phrases/README.md`, `phrases/DEPLOYMENT.md`, `phrases/env.example`) for their setup details.

## License

© Andrew McIntosh
