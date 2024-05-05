import TextAreaComponent from "./TextAreaComponent";
import AnalyticsComponent from "./AnalyticsComponent";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfCharachters = text.length;
  const numberOfWords = text.split(" ").length;

  return (
    <div className="container">
      <TextAreaComponent text={text} setText={setText} />
      <AnalyticsComponent
        numberOfCharachters={numberOfCharachters}
        numberOfWords={numberOfWords}
      />
    </div>
  );
}
