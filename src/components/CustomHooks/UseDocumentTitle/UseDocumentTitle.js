import {useEffect} from 'react'

function UseDocumentTitle(count) {
  useEffect(() =>{
    document.title = `Count ${count}`
  },[count])
}

export default UseDocumentTitle