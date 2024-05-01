import { useContext } from "react"
import { counterContext } from "../context/context"
function Counter()
{
    const value=useContext(counterContext)
    const {count}=value
    return(
        <>
        <div>{count}</div>
        </>
    )
}

export default Counter