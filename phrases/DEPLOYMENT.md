# Deployment Guide: GitHub Pages + Vercel

This guide explains how to deploy the Phrase Combinatorics app with the frontend on GitHub Pages and the backend API on Vercel.

## Architecture Overview

- **Frontend**: Hosted on GitHub Pages at `themcintosh.github.io/phrases/`
- **Backend API**: Hosted on Vercel at `phrases.vercel.app`
- **Security**: API keys remain secure in Vercel environment variables

## Prerequisites

- Access to the `themcintosh.github.io` repository
- A Vercel account (sign up at https://vercel.com)
- An OpenAI API key (get one at https://platform.openai.com/api-keys)
- (Optional) A random.org API key (get one at https://api.random.org/api-keys/beta)

## Step 1: Deploy API Functions to Vercel

### Option A: Deploy from the phrases repository

1. Keep the `phrases` repository with the `/api` folder
2. Connect it to Vercel:
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```
3. Follow the prompts to link to your Vercel account
4. Set environment variables in Vercel dashboard:
   - `OPENAI_API_KEY` - Your OpenAI API key
   - `RANDOM_ORG_API_KEY` - (Optional) Your random.org API key

### Option B: Deploy from themcintosh.github.io

1. Copy the entire phrases project to `themcintosh.github.io/phrases/`
2. Configure Vercel to deploy from that repository
3. Set the same environment variables as above

## Step 2: Copy Frontend Files to GitHub Pages

1. Navigate to your `themcintosh.github.io` repository:
   ```bash
   cd /path/to/themcintosh.github.io
   ```

2. Create a phrases subdirectory:
   ```bash
   mkdir -p phrases
   ```

3. Copy the frontend files:
   ```bash
   cp /path/to/phrases/index.html phrases/
   cp /path/to/phrases/app.js phrases/
   cp /path/to/phrases/README.md phrases/
   ```

4. Commit and push to GitHub:
   ```bash
   git add phrases/
   git commit -m "Add phrase combinatorics app"
   git push origin main
   ```

## Step 3: Verify API Configuration

1. Open `phrases/app.js` in your GitHub Pages repo
2. Verify the `API_BASE_URL` is set correctly:
   ```javascript
   const API_BASE_URL = 'https://phrases.vercel.app';
   ```
3. Update this URL to match your Vercel deployment if different

## Step 4: Test the Deployment

1. Visit `https://themcintosh.github.io/phrases/`
2. Click "Generate Random Phrase" - this calls the Vercel API
3. Click "Interpret with AI" - this calls the OpenAI API through Vercel
4. Verify both functions work correctly

## Updating the App

### To update the frontend:
1. Make changes in the phrases repository
2. Copy updated files to `themcintosh.github.io/phrases/`
3. Commit and push to GitHub Pages

### To update the API:
1. Make changes in the phrases repository `/api` folder
2. Deploy to Vercel:
   ```bash
   vercel --prod
   ```

## Troubleshooting

### API calls fail with CORS errors
- Verify the CORS headers in `api/interpret.js` and `api/generate-phrase.js`
- They should allow requests from your GitHub Pages domain

### "API key not configured" error
- Check Vercel environment variables in the Vercel dashboard
- Ensure `OPENAI_API_KEY` is set correctly

### 404 errors on GitHub Pages
- Verify files are in the correct `/phrases` subdirectory
- Check that GitHub Pages is enabled for your repository
- Ensure you're accessing the correct URL: `themcintosh.github.io/phrases/`

### Vercel deployment fails
- Check that `vercel.json` is properly configured
- Verify the `/api` folder structure is correct
- Review Vercel deployment logs for specific errors

## Alternative: Using a Custom Subdomain

If you want to use a custom URL like `phrases.themcintosh.com`:

1. Set up a CNAME record in your DNS settings
2. Configure the custom domain in your Vercel dashboard
3. Update `API_BASE_URL` in `app.js` to match

## Security Notes

- ✅ API keys are stored securely in Vercel environment variables
- ✅ Word lists are embedded in serverless functions (never exposed)
- ✅ All sensitive operations happen server-side
- ✅ GitHub Pages serves only static HTML/JS files with no secrets
