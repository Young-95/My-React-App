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

  const resetButton = () => {

    setCounter (0);
  } 


  return (
    <>
      <h1>Counter App</h1>
      <p>{counter}</p>
      <div>
        <button onClick={minusOne}>-</button>
        <button onClick={plusOne}>+</button>
      </div>
      <button className="reset" onClick={resetButton}>Reset</button>
    </>
  )

};

export default App;