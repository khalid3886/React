import { useEffect, useRef } from "react"
import { useState } from "react"

function App()
{
  const[time,setTime]=useState(0)
  const[flag,setFlag]=useState(true)
  let intervalid=useRef(null)

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };


  useEffect(()=>{
    if(!flag)
   {
    intervalid.current= setInterval(()=>{
      setTime((prev)=>prev+1)
    },1)
   }else{
    clearInterval(intervalid.current)
   }
   return () => clearInterval(intervalid.current);
  },[flag])

  return(
    <>
    <h1>time is- {formatTime(time)}</h1>
    {flag && <button onClick={()=>{setFlag(!flag)}}>start</button>}
    {!flag && <button onClick={()=>{setFlag(!flag)}}>stop</button>}
    <button onClick={()=>{setTime(0)}}>reset</button>
    </>
  )
}

export default App