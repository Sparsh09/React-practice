import { useState } from "react";
import { Link } from "react-router-dom";

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

export const HeaderElement = () => {
  const [title, setTitle] = useState("Food Villa");
  return (
    <div className="header">
      <Title title={title} />
      <button
        onClick={() => {
          setTitle("New Food");
        }}
      >
        Change Title
      </button>
      <span className="eat-icon">🍽️</span>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/instamart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
