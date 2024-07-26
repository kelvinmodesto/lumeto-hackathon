import type { FC } from 'react';
import { useState } from 'react';
import useChatGPT from '@/hooks/useChatGPT';
import { Chat } from './components/Chat';
import { PROMPT_INTRO } from '@/constants/lessonTemplate';
import './App.css';

const App: FC = () => {
  const [prompt, setPrompt] = useState('');
  const { response, error, loading } = useChatGPT(prompt);
  const onSubmit = (text: string) => {
    if (!text) return;
    setPrompt(`${PROMPT_INTRO}: ${text}`);
  };
  console.log(response);
  return (
    <>
      <Chat onSubmit={onSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.toString()}</p>}
      {response && <code>{response}</code>}
    </>
  );
};

export default App;
