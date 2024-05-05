import TextAreaComponent from "./TextAreaComponent";
import AnalyticsComponent from "./AnalyticsComponent";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");
  const stats = {
    numberOfCharachters: text.length,
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    instagramCharacterLeft: 280 - text.length,
    xCharacterLeft: 200 - text.length,
  };
  return (
    <div className="container">
      <TextAreaComponent text={text} setText={setText} />
      <AnalyticsComponent stats={stats} />
    </div>
  );
}
