import { useState } from "react";
import Counter from "./Counter";
import ResetBtn from "./ResetBtn";
import CounterUpdate from "./CounterUpadte";
import Title from "./Title";

export default function Card() {

  const [counterValue , setCounterValue]= useState(0);

    return <div className="counter">
    <Title></Title>
    <Counter counterValue={counterValue}></Counter>
    <ResetBtn resetCount={setCounterValue}></ResetBtn>
   <CounterUpdate updateCounterValue={setCounterValue}></CounterUpdate>
  </div>
}