import "./App.css"
import { useState } from "react";

const App = () => {

  const[counter, setCounter] = useState(0);


  const plusOne = () => {

    setCounter(counter + 1);
    };

  const minusOne = () => {

    setCounter(counter - 1);
    };



  return (
    <>
      <h1>Counter App</h1>
      <p>{counter}</p>
      <button onClick={plusOne}>+</button>
      <button onClick={minusOne}>-</button>
    </>
  )

};

export default App;