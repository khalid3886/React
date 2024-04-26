//import './App.css'
import { useState } from "react";
import Greetings from "./components/Greetings"
function App() {
let isuserauthenticated=true
const [count,setCount]=useState(0)
let i=0;
const event=()=>{
  setCount(count+1)
}

  return (
    <>
      <h1 className="App">hello world</h1>
      <Greetings/>
      <button onClick={event}>value is {count}</button>
      <h1>
        {isuserauthenticated?"User is Authenticated":"user not auth"}
      </h1>
    </>
  )
}

export default App
