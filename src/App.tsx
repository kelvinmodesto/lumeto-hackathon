import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { lessonTemplate } from '@/constants/lessonTemplate';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
};

export default App;
