import {useState} from 'react'

function UseCounter(InitialCount = 0, value = 1) {

  const [count, setCount] = useState(InitialCount)

  const increment = () => {
    setCount(prevCount => prevCount + value)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - value)
  }
  const reset = () => {
    setCount(InitialCount)
  }


  return [count, increment, decrement, reset]
}

export default UseCounter