import { useState } from "react"
import Search from "./components/Search"
import Print from "./components/Printtodo"
function App()
{
  const[todo,setTodo]=useState([])
  const handleAddclick=(text)=>{
    const todoItem={
      title:text,
      status:false,
      id:Date.now()
    }
    const updatedtodo=[...todo,todoItem]
    setTodo(updatedtodo)
  }

  const handletoggle = (id) => {
    const updatedTodo = todo.map(item => {
      return item.id === id ? { ...item, status: !item.status } : item;
    });
    setTodo(updatedTodo);
  }
  
const handledelete=(id)=>{
  const updatedtodo=todo.filter(item=>item.id!==id)
  setTodo(updatedtodo)
}

  return(
    <>
    <button onClick={()=>{
      console.log(todo)
    }}>show todo array</button>
    <Search handleAddclick={handleAddclick}/>
    <ul>
  {todo.map(item => (
    <Print key={item.id} id={item.id} title={item.title} status={item.status} handletoggle={handletoggle} handledelete={handledelete}/>
  ))}
</ul>
    </>
  )
}
export default App