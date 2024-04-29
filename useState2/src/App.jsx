import { useState } from "react"

function App()
{
const[data,setData]=useState([])
const[loading,setLoading]=useState(false)
  const handleclick=()=>
  {
    setLoading(true)
    setTimeout(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>{
setData(data)
setLoading(false)
    })
  .catch(err=>console.log(err))
    },3000)
  }

  if(loading)
  {
    return <h1>loading....</h1>
  }
  return(
    <>
    <h2>get posts data</h2>
    <button onClick={handleclick}>get post</button>
    <ul>
      {data.map((item)=>(
        <div key={item.id}>
          <li>{item.title}</li>
        </div>
      ))}
    </ul>
    </>
  )
}

export default App