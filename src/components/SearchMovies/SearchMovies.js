import React from 'react';
import './SearchMovies.css'

const SearchMovies = () => {
  return (
    <>
      <form action="" className="form">
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          className="input"
          name="query"
          placeholder="Fight club "
          id="query"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchMovies;
