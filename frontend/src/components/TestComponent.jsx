import React from 'react';

function TestComponent() {
  return (
    <div>
      <button className="animate-out fade-out duration-700 repeat-infinite">
        Button A
      </button>
      <button className="animate-out spin-out duration-700 repeat-infinite">
        Button B
      </button>
      <button className="animate-out zoom-out duration-700 repeat-infinite">
        Button C
      </button>
      <button className="animate-out slide-out-to-top duration-700 repeat-infinite">
        Button D
      </button>
      <button className="animate-out slide-out-to-right duration-700 repeat-infinite">
        Button E
      </button>
    </div>
  );
}

export default TestComponent;
