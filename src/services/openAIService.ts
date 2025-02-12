import axios from 'axios';

export const generateScriptFromOpenAI = async (wordCount: number) => {
  const response = await axios.post('https://api.openai.com/v1/completions', {
    model: 'text-davinci-003',
    prompt: `Generate a script of ${wordCount} words based on the following content:`,
    max_tokens: wordCount * 1.5, // Approximate number of tokens for word count
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  });

  return response.data.choices[0].text.trim();
};