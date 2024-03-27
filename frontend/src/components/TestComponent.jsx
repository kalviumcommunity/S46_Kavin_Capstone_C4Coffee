import React, { useState } from "react";

function TestComponent() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} autoFocus />
    </div>
  );
}

export default TestComponent;
