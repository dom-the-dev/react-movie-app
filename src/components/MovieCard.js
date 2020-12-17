import React from 'react'

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w200'

function MovieCard({ movie }) {
    return (
        <div className={'movie-card'}>
            {movie.poster_path ?
                <img src={IMAGE_PATH + movie.poster_path} alt={movie.title} />
                : <div className="no-image">no image available</div>
            }
            <div className="movie-card__info">
                <h4 className="movie-card__title">
                    {movie.title ? movie.title : movie.name}
                </h4>
                <span className="movie-card__voting">
                    {movie.vote_average}
                </span>
            </div>
        </div>
    )
}

export default MovieCard

