import React, { useState } from 'react'
import OnMouse from './OnMouse'

const MouseContainer = () => {

  const [display, setDisplay] = useState(true)

  return (
    <div>
       <button onClick={() => setDisplay(!display)}>toggle display</button>
       {display && <OnMouse/>}
    </div>
  )
}

export default MouseContainer