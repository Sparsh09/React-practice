export default function CounterUpdate({updateCounterValue}) {
    return  <div className="counter-buttons">
    <button className="counter-button" onClick={() =>updateCounterValue((currValue) => currValue - 1)}>-</button>
    <button className="counter-button" onClick={() =>updateCounterValue((currValue) => currValue + 1)}>+</button>
  </div>
}