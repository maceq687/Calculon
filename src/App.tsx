import { useState } from "react";
import "./App.css";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, setState] = useState("");
  const re = /^-?(0|[1-9]\d*)(\.\d*)?([+\-*/]((0|[1-9]\d*)(\.\d*)?)?)*$/;

  const updateHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (re.test(event.target.value)) setState(event.target.value);
  };

  const addToFormula = (
    _event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    if (re.test(state.concat(value)))
      setState((prevState) => prevState.concat(value));
  };

  function calculate() {
    setState((prevState) => eval(prevState).toString());
  }

  return (
    <>
      <div className="card">
        <input type="text" value={state} onChange={updateHandle} />
        <br />
        <CalcButton addToFormula={addToFormula} value="7" />
        <CalcButton addToFormula={addToFormula} value="8" />
        <CalcButton addToFormula={addToFormula} value="9" />
        <CalcButton addToFormula={addToFormula} value="+" />
        <br />
        <CalcButton addToFormula={addToFormula} value="4" />
        <CalcButton addToFormula={addToFormula} value="5" />
        <CalcButton addToFormula={addToFormula} value="6" />
        <CalcButton addToFormula={addToFormula} value="-" />
        <br />
        <CalcButton addToFormula={addToFormula} value="1" />
        <CalcButton addToFormula={addToFormula} value="2" />
        <CalcButton addToFormula={addToFormula} value="3" />
        <CalcButton addToFormula={addToFormula} value="*" />
        <br />
        <CalcButton addToFormula={addToFormula} value="0" />
        <CalcButton addToFormula={addToFormula} value="." />
        <button onClick={calculate}>=</button>
        <CalcButton addToFormula={addToFormula} value="/" />
      </div>
    </>
  );
}

export default App;
