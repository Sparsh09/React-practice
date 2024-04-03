import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="leftHeader">
        <img src={LOGO_URL} />
        <h1>FoodOnMobile</h1>
      </div>
      <div className="rightHeader">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Card</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
