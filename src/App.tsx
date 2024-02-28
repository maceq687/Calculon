import { useState } from "react";
import "./App.css";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, setState] = useState("");

  const updateHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const textarea = document.getElementById("formula");

  textarea?.addEventListener("keydown", (event) => {
    if (
      [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "+",
        "-",
        "*",
        "/",
        ".",
        "Backspace",
      ].indexOf(event.key) == -1
    ) {
      event.preventDefault();
    }
  });

  const addToFormula = (
    _event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setState((prevState) => prevState.concat(value));
  };

  function calculate() {
    setState((prevState) => eval(prevState));
  }

  return (
    <>
      <div className="card">
        <input type="text" id="formula" value={state} onChange={updateHandle} />
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
