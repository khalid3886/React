import { useEffect, useRef } from "react";

function App() {
  const ref = [useRef(null), useRef(null), useRef(null)]; // Initialize ref with three useRef hooks

  useEffect(() => {
    ref[0].current.focus();
  }, []);

  const handleClick = () => {
    const obj = {
      name: ref[0].current.value,
      email: ref[1].current.value,
      password: ref[2].current.value
    };
    console.log(obj);
  };

  return (
    <>
      <input type="text" ref={ref[0]} placeholder="name" />
      <input type="text" ref={ref[1]} placeholder="email" />
      <input type="text" ref={ref[2]} placeholder="password" />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}

export default App;
