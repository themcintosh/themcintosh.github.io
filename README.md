# Andrew McIntosh's Portfolio

This repository contains various web applications and projects.

## Projects

### Kensington Data Dashboard
Located at `/kensington` - A data dashboard displaying various datasets for the Kensington area.

### Swadesh Word Image Generator
Located at `/swadesh` - An interactive app that generates AI images from randomly combined words using OpenAI's DALL-E.

## Setup for Swadesh App

The Swadesh Word Image Generator requires an OpenAI API key to generate images.

### Environment Variables

Create a `.env` file in the root directory (or configure in Vercel dashboard):

```
OPENAI_API_KEY=your_openai_api_key_here
```

Get your OpenAI API key from: https://platform.openai.com/api-keys

### Vercel Deployment

1. Connect this repository to Vercel
2. Add the `OPENAI_API_KEY` environment variable in the Vercel project settings
3. Deploy

### Local Development

To test the Vercel serverless functions locally:

```bash
npm install -g vercel
vercel dev
```

Make sure to create a `.env` file with your `OPENAI_API_KEY` before running locally.

## License

© Andrew McIntosh
