import "./App.css";
import { React, useState } from "react";
import { Button } from "./Button";

const message = ["Learn HTML and CSS", "Learn JS", "Learn React"];

function App() {
  const [steps, setSteps] = useState(1);
  const [isClose, setIsClose] = useState(true);

  const previousHandler = () => {
    if (steps > 1) setSteps(steps - 1);
  };

  const nextHandler = () => {
    if (steps < 3) setSteps(steps + 1);
  };

  const isCloseHandler = () => {
    setIsClose(!isClose);
  };

  return (
    <>
      <button className="close" onClick={isCloseHandler}>
        &times;
      </button>
      {isClose && (
        <div className="steps">
          <div className="numbers">
            <div className={steps >= 1 ? "active" : ""}>1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">{message[steps - 1]}</p>
          <div className="buttons">
            <Button handler={previousHandler}>
              <span>👈</span>Previous
            </Button>
            <Button handler={nextHandler}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
