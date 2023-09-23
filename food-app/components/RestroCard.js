import { cloudinaryImageLink } from "../utils/common";

export const RestaurantCard = ({ restraunt }) => {
  const { name, cuisines, avgRatingString, cloudinaryImageId } = restraunt;
  let url = cloudinaryImageLink + cloudinaryImageId;
  return (
    <div className="card">
      <img className="card-img" src={url} />
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{avgRatingString}</h4>
    </div>
  );
};
