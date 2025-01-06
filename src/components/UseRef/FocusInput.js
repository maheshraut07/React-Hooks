import React, { useEffect, useRef } from "react";

function FocusInput() {
  // create the useref variable

  const inputRefVariable = useRef();

  useEffect(() => {
    // we want to focus the input on initial rendering
    console.log(inputRefVariable);
    console.log(inputRefVariable.current);


    inputRefVariable.current.focus();
    inputRefVariable.current.style.backgroundColor = "blue";

  }, []);

  return (
    <div>
      <input ref={inputRefVariable} type="text" />
      <input type="text" />
    </div>
  );
}

export default FocusInput;

// used to access the dom nodes directly in the functional compoenents

/*

he useRef hook in React is a versatile tool used for accessing and interacting with DOM elements or storing mutable values across renders without causing re-renders.

Here’s how it works and its common uses:

Basic Usage
Creating a Ref:

jsx
Copy code
import { useRef } from 'react';

function MyComponent() {
  const myRef = useRef(null);
  
  return <div ref={myRef}>Hello, World!</div>;
}
In this example, useRef creates a ref object (myRef) that can be attached to a DOM element (a <div> in this case) via the ref attribute. The current property of myRef will hold the reference to the DOM node once it’s rendered.

Accessing the Ref:

jsx
Copy code
import { useEffect, useRef } from 'react';

function MyComponent() {
  const myRef = useRef(null);

  useEffect(() => {
    if (myRef.current) {
      console.log(myRef.current); // Logs the DOM node
      myRef.current.focus(); // For example, focus the input element
    }
  }, []);

  return <input ref={myRef} />;
}
Here, the useEffect hook accesses the current property of myRef to perform actions with the DOM node. This code logs the DOM node to the console and focuses the input element when the component mounts.

Key Points
Persistent Value Storage: useRef can also be used to store mutable values that don’t cause a re-render when updated. For example, you might use it to keep track of previous values or maintain a timer ID.

jsx
Copy code
function Timer() {
  const timerIdRef = useRef(null);

  useEffect(() => {
    timerIdRef.current = setInterval(() => {
      console.log('Tick');
    }, 1000);

    return () => clearInterval(timerIdRef.current);
  }, []);
  
  return <div>Timer is running...</div>;
}
In this example, timerIdRef stores the interval ID so it can be cleared when the component unmounts.

Avoid Re-renders: Updating the current property of a ref doesn’t trigger a re-render, which is useful for holding data that changes over time but doesn’t impact the UI.

Summary
useRef creates a mutable ref object with a current property.
The current property can hold a DOM node reference or any mutable value.
Modifications to the current property do not trigger re-renders.
Commonly used for accessing DOM elements directly or for keeping mutable values.
Let me know if you have any more questions or need further clarification!

*/
