import { useState} from "react";
import "./App.css";
import CalcButton from "./components/CalcButton";

const regexForFormula =
  /^(?:-?(0|[1-9]\d*)(\.\d*)?([+\-*/](?!([+\-*/]))((0|[1-9]\d*)(\.\d*)?)?)?)*$/;
const regexForCalculation =
  /^-?(0|[1-9]\d*)(\.\d*)?([+\-*/](?!$)(0|[1-9]\d*)(\.\d*)?)*$/;
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

function App() {
  const [state, setState] = useState("");
  const [showProblem, setShowProblem] = useState(false);

  const updateHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (regexForFormula.test(event.target.value)) {
      setShowProblem(false);
      setState(event.target.value);
    } else setShowProblem(true);
  };

  const addToFormula = (value: string) => {
    if (regexForFormula.test(state.concat(value))) {
      setShowProblem(false);
      setState((prevState) => prevState.concat(value));
    } else setShowProblem(true);
  };

  function calculate() {
    if (regexForCalculation.test(state)) {
      setShowProblem(false);
      setState((prevState) => eval(prevState).toString());
    } else setShowProblem(true);
  }

  return (
    <>
      <div className="card">
        <div className="flex-container">
          {showProblem && <div className="err">Please check for errors</div>}
          <input type="text" value={state} onChange={updateHandle} autoFocus />
          {buttons.map((button) => (
            <CalcButton
              key={button}
              value={button}
              processValue={button === "=" ? calculate : addToFormula}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
