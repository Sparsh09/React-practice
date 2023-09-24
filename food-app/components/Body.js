import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestroCard.js";
import { Shimmer } from "./Shimmer.js";
import { Link } from "react-router-dom";
import { useFilter } from "../utils/useFilter.js";
import { useRestro } from "../utils/useRestaurants.js";
import { useOffline } from "../utils/useOffline.js";
import { useOdd } from "../utils/useOdd.js";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filterRestro, setFilterRestro] = useState([]);
  const restro = useRestro();

  useEffect(() => {
    setFilterRestro(restro);
  }, [restro]);

  const offline = useOffline();

  // const [odd, setOdd] = useOdd();

  if (offline) {
    console.log(offline);
    // setOdd(true);
    // console.log(odd);
    return <h1>🔴 Offline, please check your internet connection!!</h1>;
  }

  return restro.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="food-card-search-bar">
        <input
          type="text"
          className="food-card-search-bar-input"
          placeholder="Search Restuarants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-bar-button"
          onClick={() => {
            setFilterRestro(useFilter(searchText));
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filterRestro.map((c) => {
          return (
            <Link to={"/restaurant/" + c.id}>
              <RestaurantCard key={c.id} restraunt={c} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
