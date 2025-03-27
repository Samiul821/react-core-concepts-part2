import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Bowler from "./Bowler";
import Users from "./Users";
import Firends from "./Friends";
import Posts from "./Posts";
import { Suspense } from "react";

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

// const fetchFriends = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json()
// }  

const fetchPosts = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

function App() {
  // const friendsPromise = fetchFriends()
  const postsPromise = fetchPosts()

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

      <Suspense fallback={<h4>Posts are coming.....</h4>}>
         <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense> */}
      {/* <Suspense fallback={<h3>Friends are coming  for treat</h3>}>
        <Firends friendsPromise={friendsPromise}></Firends>
      </Suspense> */}
      <Batsman></Batsman>
      <Bowler></Bowler>

      <Counter></Counter>
      

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
