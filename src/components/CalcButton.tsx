import "./CalcButton.css";

type Props = {
  value: string;
  addToFormula: (event: React.MouseEvent<HTMLElement>, value: string) => void;
};

function CalcButton({ value, addToFormula }: Props) {
  return (
    <>
      <button onClick={(event) => addToFormula(event, value)}>{value}</button>
    </>
  );
}

export default CalcButton;
