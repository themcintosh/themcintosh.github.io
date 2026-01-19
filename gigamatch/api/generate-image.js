// Vercel Serverless Function for OpenAI Image Generation
export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Check for OpenAI API key in environment variables
    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey) {
        console.error('OPENAI_API_KEY not found in environment variables');
        return res.status(500).json({ error: 'Server configuration error: API key not found' });
    }

    try {
        const { prompt, words } = req.body;

        if (!prompt || !words || words.length !== 3) {
            return res.status(400).json({ error: 'Invalid request: prompt and three words required' });
        }

        console.log('Generating image for prompt:', prompt);
        console.log('Words:', words);

        // Prepare the request body
        const requestBody = {
            model: 'dall-e-3',
            prompt: prompt,
            n: 1,
            size: '1024x1024',
            style: 'vivid',
            quality: 'standard',
        }

        console.log('Request body:', JSON.stringify(requestBody, null, 2));
        console.log('API Key present:', !!openaiApiKey);
        console.log('API Key length:', openaiApiKey ? openaiApiKey.length : 0);

        // Call OpenAI API using DALL-E
        const openaiResponse = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openaiApiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        console.log('OpenAI Response status:', openaiResponse.status);
        console.log('OpenAI Response headers:', Object.fromEntries(openaiResponse.headers.entries()));

        if (!openaiResponse.ok) {
            const errorText = await openaiResponse.text();
            console.error('OpenAI API error status:', openaiResponse.status);
            console.error('OpenAI API error body:', errorText);
            console.error('Prompt that caused error:', prompt);
            console.error('Words:', words);

            let errorData;
            try {
                errorData = JSON.parse(errorText);
            } catch (e) {
                errorData = { message: errorText };
            }

            return res.status(openaiResponse.status).json({
                error: errorData.error?.message || errorData.message || 'Failed to generate image from OpenAI',
                details: errorData,
                prompt: prompt,
                status: openaiResponse.status
            });
        }

        const data = await openaiResponse.json();

        // Extract the image URL from the response
        const imageUrl = data.data[0].url;
        const revisedPrompt = data.data[0].revised_prompt;

        console.log('Image generated successfully');

        // Return the image URL to the client
        return res.status(200).json({
            imageUrl: imageUrl,
            originalPrompt: prompt,
            revisedPrompt: revisedPrompt,
            words: words
        });

    } catch (error) {
        console.error('Error in generate-image function:', error);
        return res.status(500).json({
            error: 'Internal server error: ' + error.message
        });
    }
}
