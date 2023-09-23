import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinaryImageLink } from "../utils/common";
import { Shimmer } from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [res, setRes] = useState(null);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7046486&lng=76.71787259999999&restaurantId=" +
        id
    );
    await data.json().then((data) => {
      if (data.data && data.data.cards[0]) {
        setRes(data.data?.cards[0]?.card?.card?.info);
        setMenu(data.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards);
      }
      console.log(res);
    });
  }
  return !res && !menu ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{res.name}</h1>
      <h4>Restaurant id: {id}</h4>
      <img
        style={{ height: "300px", width: "300px" }}
        src={cloudinaryImageLink + res.cloudinaryImageId}
      />
      <div>{res?.city}</div>
      <div>{res?.area}</div>
      <div>{res?.avgRating}</div>
    </div>
  );
};
export default RestaurantMenu;
