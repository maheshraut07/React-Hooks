import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fetchdata = () => {

  const [posts, setPosts] = useState([])
  console.log("component rendered")

  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( res => {
        console.log(res)
        setPosts(res.data)
    })
    .catch(err => console.error(err))
    console.log("component rendered due to useEffect Hook")
  },[])

  return (
    <div>
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Fetchdata

/*

The useEffect hook in React is used for managing side effects in functional components. Side effects are operations that can affect
 other parts of the application and cannot be done during the rendering process.
 Examples of side effects include data fetching, subscriptions, or manually changing the DOM.

Purpose of useEffect
Perform Side Effects: It allows you to perform actions like data fetching, subscriptions, or manually changing the DOM after the component renders.
Control Component Lifecycle: It helps in managing the lifecycle of a component, similar to how lifecycle methods work in class components (e.g., componentDidMount, componentDidUpdate, componentWillUnmount).
Cleanup: It provides a way to clean up resources (e.g., unsubscribe from a subscription) when the component unmounts or before running the effect again.



The return statement in the useEffect hook is used for cleanup purposes. It’s equivalent to componentWillUnmount in class components. Here’s what it does:

Purpose: Cleans up side effects to avoid memory leaks or unwanted behavior.
When it's called:
Before the effect runs again (if dependencies change).
When the component unmounts.

*/