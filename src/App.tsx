import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("");

  const updateHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  function calculate() {
    setState((prevState) => eval(prevState));
  }

  return (
    <>
      <div className="card">
        <input type="text" value={state} onChange={updateHandle} />
        <br />
        <button onClick={calculate}>calculate</button>
      </div>
    </>
  );
}

export default App;
