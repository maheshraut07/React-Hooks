import React,{useState} from 'react'
import UseDocumentTitle from './UseDocumentTitle'

function DocumentTitle2() {

  const[count,setCount] = useState(0)
  UseDocumentTitle(count)
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>CountTitle1 = {count}</button>
    </div>
  )
}

export default DocumentTitle2