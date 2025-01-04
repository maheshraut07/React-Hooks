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

/**
 
The useState hook in React is used to manage state in functional components. 
It allows you to add state variables to your component without needing to write a class.


 */