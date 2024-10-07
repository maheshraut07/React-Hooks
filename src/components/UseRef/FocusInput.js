import React,{useEffect, useRef} from 'react'

function FocusInput() {

   // create the useref variable 

   const inputRefVariable = useRef(null)

  useEffect(() =>{

    // we want to focus the input on initial rendering
    inputRefVariable.current.focus()
    console.log(inputRefVariable.current)

  },[])

  return (
    <div>
        <input type="text" />
        <input ref={inputRefVariable} type="text" />
    </div>
  ) 
}

export default FocusInput



// used to access the dom nodes directly in the functional compoenents 