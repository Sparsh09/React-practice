import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

const RestCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={CLOUDINARY_IMAGE_URL + resData.info.cloudinaryImageId}
        alt={resData.info.id}
      />
      <h3>
        {resData.info.name}
        <span>
          <br />
          {resData.info.avgRating}⭐️
        </span>
      </h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestCard;
