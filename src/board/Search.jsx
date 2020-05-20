import React from 'react';

const Search = () => {
    return (
        <div className="search">
            <h1 className="search__title">Search Flight</h1>
            <div className="search__box">
                <input className="search__input" 
                    placeholder="Airline, destination or flight #"
                />
                <button className="search__btn">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
