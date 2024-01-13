import "./App.css";
import { React, useState } from "react";

const message = ["Learn HTML and CSS", "Learn JS", "Learn React"];

function App() {
  const [steps, setSteps] = useState(1);

  const previousHandler = () => {
    setSteps(steps - 1);
  };
  const NextHandler = () => {
    setSteps(steps + 1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={steps >= 1 ? "active" : ""}>1</div>
        <div className={steps >= 2 ? "active" : ""}>2</div>
        <div className={steps >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">{message[steps - 1]}</p>
      <div className="buttons">
        <button onClick={previousHandler}>Previous</button>
        <button onClick={NextHandler}>Next</button>
      </div>
    </div>
  );
}

export default App;
