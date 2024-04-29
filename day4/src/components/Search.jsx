import { useState } from "react"

function Search(props)
{
    const[input,setInput]=useState("") 
    const {handleAddclick}=props
    const onclick=()=>{
        handleAddclick(input)
        setInput("")
    }
    return(
        <>
        <div>
            <input type="text" placeholder="add todo" value={input} onChange={(e)=>{
                setInput(e.target.value)
            }}/>
            <button onClick={onclick}>add todo</button>
        </div>
        </>
    )
}
export default Search