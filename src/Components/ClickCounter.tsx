import React from 'react';
import WithCounter from './WithCounter';

// Define the props for ClickCounter component
interface ClickCounterProps {
  count: number;
  incrementCount: () => void;
}

const ClickCounter: React.FC<ClickCounterProps> = ({ count, incrementCount }) => {
  return (
    <div>
      <h1 onClick={incrementCount} className='pointer'>ClickCounter {count}</h1>
    </div>
  );
};

// Wrap the ClickCounter with the WithCounter HOC
export default WithCounter(ClickCounter,10);
