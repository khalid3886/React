import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

function App()
{
  const a=useRef(0)
  const[count,setCount]=useState(0)
  useEffect(()=>{
    a.current=a.current+1
    console.log(`value of a is ${a.current}`)
  })
console.log(`rendering... ${Date.now()}`)
  const handleclick=()=>{
    a.current=a.current+1
    console.log(`value of a is ${a.current}`)
  }
  return(
    <>
    <h1>home page</h1>
    <button onClick={handleclick}>inc count - {count}</button>
    </>
  )
}

export default App