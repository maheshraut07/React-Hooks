import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fetchdata = () => {

  const [posts, setPosts] = useState([])

  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( res => {
        console.log(res)
        setPosts(res.data)
    })
    .catch(err => console.error(err))
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