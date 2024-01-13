import "./App.css";

const message = ["Learn HTML and CSS", "Learn JS", "Learn React"];

function App() {
  const steps = 2;
  return (
    <div className="steps">
      <div className="numbers">
        <div className={steps >= 1 ? "active" : ""}>1</div>
        <div className={steps >= 2 ? "active" : ""}>2</div>
        <div className={steps >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">{message[steps - 1]}</p>
      <div className="buttons">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default App;
