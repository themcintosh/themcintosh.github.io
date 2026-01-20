# Phrase Combinatorics

A web application that generates random phrase combinations and interprets them using AI. API keys are kept secure on the server side using Vercel serverless functions.

## Features

- **Random Phrase Generation**: Uses the random.org API to generate truly random numbers for selecting word combinations
- **AI Interpretation**: Leverages OpenAI's GPT models to provide creative interpretations of the generated phrases
- **Private Word Lists**: Word lists are stored server-side and never exposed to clients
- **Secure API Keys**: API keys are stored securely as environment variables on the server (never exposed to clients)
- **Serverless Architecture**: Runs on Vercel with serverless functions for all API calls

## How It Works

1. **Generate Random Phrase**: Click the button to call a serverless function, which:
   - Uses random.org API to generate two random numbers
   - Selects words from private server-side word lists
   - Returns the complete phrase to display
2. **Interpret with AI**: Click the second button to send the phrase to a serverless function, which calls OpenAI's API for creative interpretation
3. **View Result**: The AI's interpretation is displayed on the page

## Security & Privacy

- ✅ **API keys** are stored securely as environment variables on the server
- ✅ **Word lists** are stored inside serverless functions (never sent to clients)
- ✅ All sensitive operations happen server-side
- ✅ Users cannot see your word combinations or reverse-engineer them

## Deployment

This app is designed to be deployed with:
- **Frontend**: GitHub Pages at `themcintosh.github.io/phrases/`
- **Backend**: Vercel serverless functions at `phrases.vercel.app`

**👉 See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment instructions.**

### Quick Start

1. Deploy the API functions to Vercel
2. Copy frontend files (`index.html`, `app.js`) to `themcintosh.github.io/phrases/`
3. Configure environment variables in Vercel:
   - `OPENAI_API_KEY` - Your OpenAI API key
   - `RANDOM_ORG_API_KEY` - (Optional) Your random.org API key

### Prerequisites

- Access to the `themcintosh.github.io` repository
- A Vercel account (sign up at https://vercel.com)
- An OpenAI API key (get one at https://platform.openai.com/api-keys)
- (Optional) A random.org API key (get one at https://api.random.org/api-keys/beta)

### Alternative: Vercel-Only Deployment

If you prefer to host everything on Vercel (without GitHub Pages):

1. Update `app.js` to use relative API paths:
   ```javascript
   const API_BASE_URL = '';  // Use relative paths for Vercel-only deployment
   ```

2. Deploy to Vercel:
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

3. Set environment variables in the Vercel dashboard:
   - `OPENAI_API_KEY` - Your OpenAI API key
   - `RANDOM_ORG_API_KEY` - (Optional) Your random.org API key

4. Visit your Vercel deployment URL to use the app

## Local Development

To test locally with Vercel functions:

```bash
# Install Vercel CLI
npm install -g vercel

# Run development server
vercel dev
```

Then visit `http://localhost:3000` in your browser.

## Project Structure

```
.
├── index.html              # Frontend UI
├── app.js                  # Frontend JavaScript
├── api/
│   ├── generate-phrase.js  # Serverless function for phrase generation
│   └── interpret.js        # Serverless function for AI interpretation
├── vercel.json             # Vercel configuration
├── DEPLOYMENT.md           # Detailed deployment guide
└── README.md              # This file
```

## Contributing

Feel free to open issues or submit pull requests with improvements!
