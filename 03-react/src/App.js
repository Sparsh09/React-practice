import React from "react";
import ReactDOM from "react-dom";
import Body from "./components/Body";
import Header from "./components/Header";
const App = () => {
  return (
    <div id="app" className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);