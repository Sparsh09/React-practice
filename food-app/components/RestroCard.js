import { cloudinaryImageLink } from "../utils/common";

export const RestaurantCard = ({ restraunt }) => {
  const { name, cuisines, avgRatingString, cloudinaryImageId } = restraunt;
  let url = cloudinaryImageLink + cloudinaryImageId;
  return (
    <div className="flex flex-col h-64 w-64 border-red-500 border-solid border-2 rounded-2xl items-center justify-center p-4 m-5 hover:border-blue-400 transition-all hover:scale-125">
      <img
        className="h-32 w-32 items-center rounded-xl justify-center"
        src={url}
      />
      <h2>{name}</h2>
      <h3 className="items-center flex break-words flex-wrap">
        {cuisines.join(" , ")}
      </h3>
      <h4>{avgRatingString}</h4>
    </div>
  );
};
