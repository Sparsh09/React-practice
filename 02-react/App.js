import React from "react";
import ReactDOM from "react-dom";

const item = [
  "React Basics",
  "What does Bundler do ?",
  "Brushed Up basics of DSA",
];
const items = React.createElement(
  "ul",
  { id: "items" },
  item.map((i) => React.createElement("li", { id: i }, i))
);

const img = React.createElement("img", {
  id: "img",
  src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXpmYmV1YjB5MTBnanZsdXF3bXBkaHF1bWEwNWF6YWFybjlsNXY1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif",
});

const itemsDid = React.createElement("div", { id: "items" }, items);

const container = React.createElement("div", { id: "container" }, [
  itemsDid,
  img,
]);
const header = React.createElement(
  "h1",
  { id: "header" },
  "Daily Practice Day 1"
);
const parent = React.createElement("div", { id: "parent" }, [
  header,
  container,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
