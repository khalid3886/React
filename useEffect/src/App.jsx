import { useState } from "react"
import { useEffect } from "react"
import Print from "./conponents/Print"
function App()
{
  const[data,setData]=useState([])
  const[loading,setLoading]=useState(false)
  const[page,setPage]=useState(1)

  const fetchdata=(page)=>{
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&&_page=${page}`)
    .then(res=>res.json())
    .then(data=>{
      setData(data)
      setTimeout(()=>{
        setLoading(false)
      },0)
    })
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    fetchdata()
  },[])

  if(loading)
  {
    return <h1>loading....</h1>
  }

  return (
    <>
<div>
  <button disabled={page==1} onClick={()=>{setPage(page-1)
  fetchdata(page)}}>prev</button>
  <span>{page}</span>
  <button disabled={page==11} onClick={()=>{setPage(page+1)
  fetchdata(page)}}>next</button>
  <ul>
    {
      data.map(item=>(
        <Print key={item.id} id={item.id} title={item.title} body={item.body}/>
      ))
    }
  </ul>
</div>
    </>
  )
}

export default App