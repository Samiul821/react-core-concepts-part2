import "./App.css";

function App() {
  function handleClick() {
    alert("I am Clicked");
  }

  const handleClick3 = () => {
    alert("I am Clicked");
  };

  const handleAdd4 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <button onClick="handleClick()">Click Me</button> */}
      <div>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={handleClick3}>Click Me2</button>
        <button onClick={() => alert("click 3")}>Click me3</button>
        <button onClick={() => handleAdd4(7)}>Click Add 4</button>
      </div>
    </>
  );
}

export default App;
