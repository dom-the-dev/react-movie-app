import React from 'react'

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w200'

function MovieCard({ movie }) {
    console.log(movie);
    return (
        <div className={'movie-card'}>
            <img src={IMAGE_PATH + movie.poster_path} alt={movie.title} />
            <div className="movie-card__info">
                <span className="movie-card__title">
                    {movie.title ? movie.title : movie.name}
                </span>
                <span className="movie-card__voting">
                    {movie.vote_average}
                </span>
            </div>
        </div>
    )
}

export default MovieCard

