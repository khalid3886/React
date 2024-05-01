import Counter from "./Counter"
import { counterContext } from "../context/context"
import { useContext } from "react"
function Button()
{
    const value=useContext(counterContext)
    const{count,setCount}=value
    return(
        <>
        <button onClick={()=>{
            setCount((prev)=>prev+1)
        }}><span><Counter/></span></button>
        </>
    )
}

export default Button