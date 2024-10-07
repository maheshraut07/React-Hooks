import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchDataWithIDWithButton = () => {

  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  useEffect(() =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then( res => {
        console.log(res)
        setPost(res.data)
    })
    .catch(err => console.error(err))
  },[idFromButtonClick])

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button onClick={e => setIdFromButtonClick(id)}>Fetch Data</button>
        <ul>
           {post.title}
        </ul>
    </div>
  )
}

export default FetchDataWithIDWithButton 