import Counter from "./Counter";
import CounterButton from "./CounterButton";
import CounterUpdate from "./CounterUpadte";
import Title from "./Title";

export default function Card() {
    return <div>
    <Title></Title>
    <Counter></Counter>
    <CounterButton btnName="Reset"></CounterButton>
   <CounterUpdate></CounterUpdate>
  </div>
}