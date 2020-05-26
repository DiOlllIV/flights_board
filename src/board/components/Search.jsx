import React from 'react';

const Search = ({ setFilterText }) => {
    let filterText = '';

    return (
        <div className="search">
            <h1 className="search__title">Search Flight</h1>
            <div className="search__box">
                <input type="text"
                    onChange={(e) => {filterText = e.target.value}}
                    className="search__input" 
                    placeholder="Airline, destination or flight #"
                />
                <button className="search__btn"
                    onClick={() => setFilterText(filterText)}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
