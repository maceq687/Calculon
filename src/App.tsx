import { useState } from "react";
import "./App.css";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, setState] = useState("");
  const re = /^-?(0|[1-9]\d*)(\.\d*)?([+\-*/]((0|[1-9]\d*)(\.\d*)?)?)*$/;
  const buttons: readonly string[] = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "0",
    ".",
    "=",
    "/",
  ];

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
        <div className="flex-container">
          <input type="text" value={state} onChange={updateHandle} autoFocus />
          {buttons.map((button) => (
            <CalcButton
              key={button}
              value={button}
              addToFormula={addToFormula}
              calculate={calculate}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
