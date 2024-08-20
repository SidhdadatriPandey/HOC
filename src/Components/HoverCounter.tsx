import React from 'react';
import WithCounter from './WithCounter';

// Define the props for HoverCounter component
interface HoverCounterProps {
  count: number;
  incrementCount: () => void;
}

// Define the HoverCounter component
const HoverCounter: React.FC<HoverCounterProps> = ({ count, incrementCount }) => {
  return (
    <div>
      <h1 onMouseOver={incrementCount} className="pointer">
        HoverCounter {count}
      </h1>
      <p></p>
    </div>
  );
};

// Wrap the HoverCounter with the WithCounter HOC
export default WithCounter(HoverCounter,5);
