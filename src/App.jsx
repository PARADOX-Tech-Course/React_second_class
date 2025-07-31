import { useState, useRef, useEffect } from 'react';
import CounterDisplay from './CounterDisplay';
import CounterButtons from './CounterButtons';
import './index.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const plusButtonRef = useRef(null);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    plusButtonRef.current?.focus();
  };

  const handleReset = () => {
    setCount(0);
    plusButtonRef.current?.focus();
  };

  useEffect(() => {
    setMessage(`현재 카운트는 ${count}입니다.`);
  }, [count]);

  return (
    <div className="wrapper">
      <div className="container">
        <CounterDisplay message={message} />
        <CounterButtons
          count={count}
          onIncrement={handleIncrement}
          onReset={handleReset}
          plusButtonRef={plusButtonRef}
        />
      </div>
    </div>
  );
} 