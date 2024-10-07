import React, { useEffect, useState } from 'react'

const OnMouse = () => {

    const [X,setX] = useState(0)
    const [Y,setY] = useState(0)

    const logMousePosition = (e) =>{
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() =>{
        console.log("UseEffect Called")
        window.addEventListener('mousemove',logMousePosition)

        return () =>{          // this is called as cleanup function when the component unmounts it will be executed 
          console.log("Component unmounting code")
          window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    // when we want to run the useEffect only once when the componenets renders first then 
    // we have the pass the empty dependency array for the same thing

  return (
    <div>
        Hooks X - {X} Y - {Y}
    </div>
  )
}

export default OnMouse