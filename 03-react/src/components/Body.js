import restData from "../utils/mockData";
import RestCard from "./RestCard";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {}}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restData.map((res) => (
          <RestCard resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
