import React from 'react'
import './Card.css'

const Card = (props) => {
    const {movie} = props

    return (
        
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
            
        
    )
}

export default Card
