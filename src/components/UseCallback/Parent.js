import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child component rendered!");
  return <button onClick={onClick}>Increment</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Count: {count}</p>
      <Child onClick={increment} />
    </div>
  );
}

export default Parent;

/*


The useCallback hook in React is used to memoize a function. It returns a memoized version of the callback that only changes if one of the dependencies has changed. This can be helpful for performance optimization, especially when passing callback functions to child components to prevent unnecessary re-renders.

When to use useCallback?
When you pass a function as a prop to a child component, and you want to avoid unnecessary re-creation of the function on every render.
When you need to prevent a child component from re-rendering unless certain dependencies change.
Syntax:
javascript
Copy code
const memoizedCallback = useCallback(
  () => {
    // your function logic here
  },
  [dependencies]
);
memoizedCallback is the memoized version of your function.
The function will be re-created only if the values in the dependencies array change.
Example without useCallback:
javascript
Copy code
import React, { useState } from "react";

const Child = ({ onClick }) => {
  console.log("Child component rendered!");
  return <button onClick={onClick}>Increment</button>;
};

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Count: {count}</p>
      <Child onClick={increment} />
    </div>
  );
}

export default Parent;



In this example, even though the increment function does not depend on name, the Child component will re-render every time the Parent component re-renders, which happens when the name state changes.

Example using useCallback:
javascript
Copy code
import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child component rendered!");
  return <button onClick={onClick}>Increment</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Count: {count}</p>
      <Child onClick={increment} />
    </div>
  );
}

export default Parent;
Key Points in this example:
useCallback Usage: We use useCallback to memoize the increment function. Now, the increment function will only be re-created when the count changes.

React.memo: The Child component is wrapped in React.memo, which prevents it from re-rendering unless its props change. Since the increment function is memoized with useCallback, it will not change unless count changes.

Conclusion:
useCallback is useful when you want to prevent re-creation of functions unnecessarily.
It can optimize performance by avoiding re-renders of child components when the function passed as a prop does not change.

*/






