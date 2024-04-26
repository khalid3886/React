function Mybutton(props)
{
    const{count,SetCount}=props
    return(
        <>
        <button onClick={()=>{SetCount(count+1)}}>value {count}</button>
        </>
    )
}
export default Mybutton