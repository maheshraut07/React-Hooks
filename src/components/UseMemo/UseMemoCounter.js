import React, { useState, useMemo } from 'react';

const UseMemoCounter = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter1 = () => {
    setCounter1(counter1 + 1);
  };

  const incrementCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  // useMemo takes the function and the dependencies array on which it depends 
  // and it return the value that is stored(cache value) in the isEven in this case 

  // Use useMemo to memoize the result of the isEven calculation
  const isEven = useMemo(() => {
    return counter1 % 2 === 0 ? 'even' : 'odd';
  }, [counter1]);

  return (
    <div>
      <button onClick={incrementCounter1}>Counter 1 {counter1}</button>
      <span>{isEven}</span>
      <button onClick={incrementCounter2}>Counter 2 {counter2}</button>
    </div>
  );
};

export default UseMemoCounter;


// it will return the cache value till the 


// the main difference between usememo and usecallback is 
// usecallback caches the function 
// usememo caches the return value of the function 









/*

The useMemo hook in React is used to optimize the performance of your functional components by memoizing the results of expensive computations. Memoization is a technique to store the results of expensive function calls and reuse them when the same inputs occur again, which helps in avoiding unnecessary recalculations.

Here's a breakdown of how useMemo works and when to use it:

Purpose
Performance Optimization: useMemo helps in optimizing performance by ensuring that a function's result is recomputed only when its dependencies change. This can prevent unnecessary re-rendering of components that rely on expensive computations.
Syntax
jsx
Copy code
const memoizedValue = useMemo(() => {
  // Expensive calculation
  return computedValue;
}, [dependencies]);
Parameters
Callback Function: The first argument to useMemo is a callback function where you perform the expensive calculation or computation.
Dependencies Array: The second argument is an array of dependencies. useMemo will recompute the memoized value only when one or more of these dependencies change. If the dependencies don't change between renders, the previously cached value is returned.
Example
Let's say you have a component that performs an expensive calculation:

jsx
Copy code
import React, { useMemo, useState } from 'react';

const ExpensiveComponent = ({ data }) => {
  const [count, setCount] = useState(0);

  // Expensive calculation
  const computedValue = useMemo(() => {
    return data.reduce((acc, item) => acc + item.value, 0);
  }, [data]);

  return (
    <div>
      <p>Computed Value: {computedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};
In this example:

The computedValue is recalculated only when the data array changes. If data remains the same between renders, the previously computed value is reused.
Changes to the count state will not trigger a recalculation of computedValue, making the component more efficient.
When to Use
Expensive Computations: Use useMemo when you have a computation or function call that is costly and you want to avoid recomputing it on every render.
Avoid Unnecessary Renders: If you pass objects or arrays as props and they are recalculated on every render, useMemo can help by ensuring that the reference remains stable unless dependencies change.
Notes
Not a Silver Bullet: Overusing useMemo can lead to unnecessary complexity and may not always result in performance gains. Use it judiciously and only for genuinely expensive computations.
Dependency Array: Ensure that all dependencies used inside the useMemo callback are included in the dependencies array to avoid stale values and bugs.
By using useMemo, you can help improve the performance of your React applications, especially when dealing with expensive calculations and rendering processes.


*/