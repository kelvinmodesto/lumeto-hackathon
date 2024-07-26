import { useState, useEffect } from 'react';
import axios from 'axios';

type UseChatGPTResponse = {
  response: string | null;
  error: Error | null;
  loading: boolean;
};

const useChatGPT = (prompt: string): UseChatGPTResponse => {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchResponse = async () => {
      if (!prompt) return;
      setLoading(true);
      try {
        const { data } = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-4o',
            messages: [{ role: 'user', content: prompt }],
          },
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
              'Content-Type': 'application/json',
            },
          },
        );
        setResponse(data.choices[0].message.content);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchResponse();
  }, [prompt]);

  return { response, error, loading };
};

export default useChatGPT;
