import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './components/SearchMovies/SearchMovies';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h1 className="title"> React Movie Search</h1>
      <SearchMovies />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
