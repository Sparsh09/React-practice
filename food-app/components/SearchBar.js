export const SearchBar = () => {
  const [searchText, setSearchText] = useState("Enter Restauarants");
  const [searchButton, setSearchButton] = useState(false);
  return (
    <>
      <div className="food-card-search-bar">
        <input
          type="text"
          className="food-card-search-bar-input"
          placeholder="Search Restuarants"
          onChange={(e) => {
            filterData(setSearchText(e.target.value));
          }}
        />
        <button
          className="search-bar-button"
          onClick={() => {
            console.log(searchButton);
            setSearchButton(!searchButton);
          }}
        >
          Search {searchButton.toString()}
        </button>
      </div>
    </>
  );
};
