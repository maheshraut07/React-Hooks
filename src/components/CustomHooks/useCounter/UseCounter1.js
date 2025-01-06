import React from 'react'
import UseCounter from './UseCounter'

function UseCounter1() {

  const [count, increment, decrement, reset] = UseCounter(0,5)

  return (
    <div>
        <h3>Count value is : {count}</h3>
        <button onClick={increment}>increment1</button>
        <button onClick={decrement}>decrement1</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default UseCounter1