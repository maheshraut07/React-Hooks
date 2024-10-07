import React, { useState, useEffect } from 'react';

function UseEffectCounter2() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("")

  useEffect(() => {
    console.log("useEffect updating the Document Title")
    document.title = `You clicked ${count} times`;
  },[count]);   // dependencies array 

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Click {count} times
      </button>
    </div>
  ); 
}

export default UseEffectCounter2;
