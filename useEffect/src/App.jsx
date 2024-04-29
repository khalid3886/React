import { useRef, useState } from "react"
import { useEffect } from "react"
import Print from "./conponents/Print"
function App()
{
  const[data,setData]=useState([])
  const[loading,setLoading]=useState(false)
  const[page,setPage]=useState(1)
  const[total,setTotal]=useState(0)

  const fetchdata=(page)=>{
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&&_page=${page}`)
    .then(res=>{
      const totalCount = res.headers.get('X-Total-Count');
      setTotal(totalCount)
      return res.json()
    })
    .then(data=>{
      setData(data)
        setLoading(false)
    })
    .catch(err=>console.log(err))
  }

useEffect(()=>{
fetchdata(page)
},[page])
 

  if(loading)
  {
    return <h1>loading....</h1>
  }

  return (
    <>
<div>
  {page>1 && <button onClick={()=>{setPage(page-1)}}>prev</button>}
  <span>{page}</span>
  {page<(total/10) && <button onClick={()=>{setPage(page+1)}}>next</button>}
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