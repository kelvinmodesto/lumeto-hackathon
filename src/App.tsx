import type { FC } from 'react';
import { useState } from 'react';
import useChatGPT from '@/hooks/useChatGPT';
import { Chat } from './components/Chat';
import { PROMPT_INTRO } from '@/constants/lessonTemplate';
import ReactJson from 'react-json-view';
import './App.css';

const App: FC = () => {
  const [prompt, setPrompt] = useState('');
  const { response, loading } = useChatGPT(prompt);
  const onSubmit = (text: string) => {
    if (!text) return;
    setPrompt(`${PROMPT_INTRO}: ${text}`);
  };
  const extractJson = (text: string) => {
    const match = text.match(/```json([\s\S]*?)```/);
    if (match && match[1]) {
      try {
        return JSON.parse(match[1]);
      } catch (e) {
        console.error('Invalid JSON:', e);
      }
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-8">
      <Chat onSubmit={onSubmit} loading={loading} />
      {response && <ReactJson src={extractJson(response)} />}
    </div>
  );
};

export default App;
