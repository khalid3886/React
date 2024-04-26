import { useState } from "react"
import Mybutton from "./componnets/Mybutton"
function App()
{
  const[count,SetCount]=useState(0)
  return(
    <>
    <Mybutton count={count} SetCount={SetCount}/>
    <Mybutton count={count} SetCount={SetCount}/>
    <Mybutton count={count} SetCount={SetCount}/>
    <Mybutton count={count} SetCount={SetCount}/>
    </>
  )
}
export default App