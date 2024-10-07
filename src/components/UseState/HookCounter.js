import React, { useState } from 'react'; // Correct import

function HookCounter() {

  const [count, setCount] = useState(0); // Declaring the state using useState

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> count {count}</button> {/* Increment the count */}
    </div>
  );
}

export default HookCounter;
