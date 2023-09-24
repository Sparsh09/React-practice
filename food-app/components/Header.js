import { useState } from "react";
import { Link } from "react-router-dom";

const Title = ({ title }) => {
  return <h1 class="text-3xl p-4 text-blue-700">{title}</h1>;
};

export const HeaderElement = () => {
  const [title, setTitle] = useState("Food Train");
  return (
    <div class="flex justify-around bg-pink-400 items-center shadow-lg shadow-pink-800">
      <Title title={title} />
      {/* <button
        onClick={() => {
          setTitle("New Food");
        }}
      >
        Change Title
      </button> */}
      {/* <span className="eat-icon">🍽️</span> */}
      <div>
        <ul className="flex py-10">
          <Link className="px-2" to="/">
            <li>Home</li>
          </Link>
          <Link className="px-2" to="/about">
            <li>About</li>
          </Link>
          <Link className="px-2" to="/contact">
            <li>Contact</li>
          </Link>
          <Link className="px-2" to="/instamart">
            <li className="bg-red-400 hover:first-letter:bg-yellow-400">
              Cart
            </li>
          </Link>
        </ul>
      </div>
      <button className="">Login</button>
    </div>
  );
};
