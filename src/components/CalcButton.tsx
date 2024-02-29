import "./CalcButton.css";

type Props = {
  value: string;
  processValue: (value: string) => void;
};

function CalcButton({ value, processValue }: Props) {
  return (
    <>
      <button onClick={() => processValue(value)}>{value}</button>
    </>
  );
}

export default CalcButton;
