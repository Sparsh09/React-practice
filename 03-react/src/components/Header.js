import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="leftHeader">
        <img src={LOGO_URL} />
        <h1>FoodOnMobile</h1>
      </div>
      <div className="rightHeader">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Card</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
