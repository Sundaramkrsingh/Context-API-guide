import { set } from "mongoose";
import { useContext, useState } from "react"
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count, setCount}>
        <Count count={count} setCount={setCount}/>
      </CountContext.Provider>
    </>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);

  return <div>
    {count}
  </div>
}

function Buttons() {
  const {count, setCount} = useContext(CountContext);

  return <div>
    <button onClick={() => {setCount(count+1)}}> Increase </button>
    <button onClick={() => {setCount(count-1)}}> Decrease </button>
  </div>
}

export default App
