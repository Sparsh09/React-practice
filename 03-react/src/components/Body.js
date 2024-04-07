import restData from "../utils/mockData";
import DummyPage from "./DummyPage";
import RestCard from "./RestCard";
import { useEffect, useState } from "react";
const Body = () => {
  let [filterRestuarant, setFilterRestaurant] = useState([]);
  let [searchRes, setSearchRes] = useState(filterRestuarant);
  let [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setFilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return filterRestuarant?.length > 0 ? (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRest = filterRestuarant.filter(
                (r) =>
                  r.info.name.toLocaleLowerCase() ===
                  searchInput.toLocaleLowerCase()
              );
              setSearchRes(filteredRest);
            }}
          >
            🔍
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filterRestuarant = filterRestuarant.filter(
              (res) => res.info.avgRatingString >= 4.1
            );
            console.log(filterRestuarant);
            setFilterRestaurant(filterRestuarant);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setFilterRestaurant(restData);
          }}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {filterRestuarant.map((res) => (
          <RestCard resData={res} />
        ))}
      </div>
    </div>
  ) : (
    <DummyPage />
  );
};
export default Body;
