import React, { ComponentType, useState } from 'react';

// Define the props that will be injected by the HOC
interface WithCounterProps {
  count: number;
  incrementCount: () => void;
}

// Define the HOC function
const WithCounter = <P extends object>(WrappedComponent: ComponentType<P & WithCounterProps>,incrementBy:number=1) => {
  return function EnhancedComponent(props: P) {
    const [count, setCount] = useState<number>(0);

    return (
      <WrappedComponent
        {...props}
        count={count}
        incrementCount={() => setCount(count + incrementBy)}
      />
    );
  };
};

export default WithCounter;
