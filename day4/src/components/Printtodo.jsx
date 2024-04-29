function Print({ id, title, status, handletoggle, handledelete }) {
    const handleclick = () => {
      handletoggle(id);
    };
  const handledelclick=()=>{
    handledelete(id)
  }

    return (
      <>
        <li>
          {title} - {status ? "completed" : "not completed"}
          <button onClick={handleclick}>toggle</button>
          <button onClick={handledelclick}>delete</button>
        </li>
      </>
    );
  }
  
  export default Print;
  