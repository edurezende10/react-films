import React from 'react';
import './SearchMovies.css';

const SearchMovies = () => {
  /* vamos usar o state, para mudar a constante query, que inicialmente será vazio e posteriormente sera adicionado o valor que o usuario definiu no input */

  const [query, setQuery] = React.useState('');
  /* definimos o valor inicial como uma string vazia no use state */

  const [movies, setMovies] = React.useState([]);

  const searchMovies = async (event) => {
    event.preventDefault();

    /*     const query = 'Jurassic Park';
     */
    const url = `https://api.themoviedb.org/3/search/movie?api_key=82acc287e0747c78c3079b7e1907472a&language=pt-BR&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      console.log(movies);
    } catch (err) {
      console.error(err);
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
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        {/* no input definimos o valor inicial, no metodo onChange, que captura quando há uma tentativa de mudança do valor, passamos uma arrow function , chamando a função setQuery e passando o valor que está no input como parametro da query */}
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className="card">
              <img
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={`${movie.title} poster`}
                key={movie.id}
              />
              <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p>
                  <small>Data de lançamento: {movie.release_date}</small>
                </p>
                <p>
                  <small>Avaliação: {movie.vote_average}</small>
                </p>
                <p className="card--desc">{movie.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SearchMovies;
