import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const Search = ({ setFilterText }) => {
  const [filterText, saveFilterText] = useState("");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (filterText) {
      history.push(`${location.pathname}/${filterText}`);
    }
  }, []);

  return (
    <div className="search">
      <h1 className="search__title">Search Flight</h1>
      <Link
        style={{ textDecoration: "none" }}
        to={`${history.location.pathname}?search=${filterText}`}
      >
        <div className="search__box">
          <input
            type="text"
            value={filterText}
            onChange={(e) => saveFilterText(e.target.value)}
            className="search__input"
            placeholder="Airline, destination or flight #"
          />
          <button
            className="search__btn"
            onClick={() => setFilterText(filterText)}
          >
            Search
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Search;
