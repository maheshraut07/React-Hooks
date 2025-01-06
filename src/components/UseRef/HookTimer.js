import React,{useEffect, useRef, useState} from 'react'

export const HookTimer = () => {
 
  const [timer, setTimer] = useState(0) 
  const intervalRef = useRef()
  
  useEffect(() =>{
    intervalRef.current = setInterval(() =>{
        setTimer(prevTimer => prevTimer +  1 )
        console.log("tick")
    }, 1000)

    return () =>{
        clearInterval(intervalRef.current)
    }
  },[timer])
     
  return (
    <div>
        Hook Timer : {timer}
        <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
    </div>
  )
}


// import React,{useEffect, useRef, useState} from 'react'

// export const HookTimer = () => {
 
//   const timerIdRef = useRef(null);

//   useEffect(() => {
//     timerIdRef.current = setInterval(() => {
//       console.log('Tick');
//     }, 1000);

//     return () => clearInterval(timerIdRef.current);
//   }, []);
  
//   return <div>Timer is running...</div>;
// }




