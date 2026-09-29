# Swadesh Word Image Generator

An interactive app that generates AI images from randomly combined words using OpenAI's DALL-E. Deployed as its own Vercel project at [swadesh-gamma.vercel.app](https://swadesh-gamma.vercel.app/).

## Layout

- `index.html` - the client-side app
- `api/generate-image.js` - serverless function that calls the OpenAI image API
- `vercel.json` - function settings (memory, max duration)
- `.env.example` - environment variables to set

## Setup

1. Copy `.env.example` to `.env` (local) or add `OPENAI_API_KEY` in the Vercel project settings.
2. Deploy `swadesh/` as the root directory of a Vercel project.
