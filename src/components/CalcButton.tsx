import "./CalcButton.css";

type Props = {
  value: string;
  addToFormula: (event: React.MouseEvent<HTMLElement>, value: string) => void;
  calculate: (event: React.MouseEvent<HTMLElement>) => void;
};

function CalcButton({ value, addToFormula, calculate }: Props) {
  return (
    <>
      {value === "=" ? (
        <button onClick={calculate}>{value}</button>
      ) : (
        <button onClick={(event) => addToFormula(event, value)}>{value}</button>
      )}
    </>
  );
}

export default CalcButton;
