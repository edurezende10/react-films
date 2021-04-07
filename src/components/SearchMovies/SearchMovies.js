import React from 'react';
import './SearchMovies.css';

const SearchMovies = () => {
  const searchMovies = async (event) => {
    event.preventDefault();

    const query = 'Jurassic Park';

    const url = `https://api.themoviedb.org/3/search/movie?api_key=82acc287e0747c78c3079b7e1907472a&language=pt-BR&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
    } catch(err){
        console.error(err)
    }
  };

  return (
    <>
      <form onSubmit={searchMovies} className="form">
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
