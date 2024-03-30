const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1", className: "child1" },
    React.createElement(
      "h1",
      { id: "heading" },
      "This is the heading from child 1"
    )
  ),
  React.createElement(
    "div",
    { id: "child2", className: "child2" },
    React.createElement(
      "h1",
      { id: "heading" },
      "This is the heading from child 2"
    )
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
