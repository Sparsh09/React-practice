import { useEffect, useState } from "react";
import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantData, setRestaruantData] = useState({});
  useEffect(() => {
    fetchMenu();
  }, []);

  fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=106055&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await response.json();
    console.log(json);
    setRestaruantData(json.data.cards[2].card.card.info);
  };
  return (
    <div className="menu">
      <h1>{restaurantData.name}</h1>
      <img
        height="250"
        width="250"
        src={CLOUDINARY_IMAGE_URL + restaurantData.cloudinaryImageId}
        alt={restaurantData.name}
      />
      <h4>{}</h4>
    </div>
  );
};
export default RestaurantMenu;
