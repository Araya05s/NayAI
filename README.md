# NayAI
A lightweight web non-DB projects that able to reveal wheter it's an AI image or not, by showing pixelated colors without using AI detection system. Purely in ReactJS, TypeScript and Canvas API.

## The Idea
The idea was simple:
 drop an image -> apply a carefully designed color treatment -> download the result, without sliders or presets.

## Note
This is an early iteration, and I’m still refining the color behavior. While some AI images are correctly revealed, it may be too sensitive that some human-made images are revealing pixelated colors as well.

Human-made images, such as 3D arts, renders and models, might be hard to differ since they are revealing pixelated colors as well. But for hand-drawn, anime, and sketches, especially with white backgrounds, are correctly revealed.

## Tech
- React + TypeScript
- Tailwind CSS
- Canvas API
- Deployed on Vercel

## Features
- Drag & drop upload
- Instant preview
- One-click download
- No server processing

## Live Demo
https://nay-ai.vercel.app/

## License
MIT