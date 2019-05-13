import React, { useState } from 'react';

const initialCount = 0;

function Counter() {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <p>
        You clicked
        {' '}
        {count}
        {' '}
        times
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        -
      </button>
      <button type="button" onClick={() => setCount(initialCount)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
