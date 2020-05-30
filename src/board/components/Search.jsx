import React, { useState } from "react";

const Search = ({ setFilterText }) => {
  const [filterText, saveFilterText] = useState("");

  return (
    <div className="search">
      <h1 className="search__title">Search Flight</h1>
      <div className="search__box">
        <input
          type="text"
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
    </div>
  );
};

export default Search;
