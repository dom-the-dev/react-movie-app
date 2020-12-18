import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
    const { movieId } = useParams();
    const MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300'

    const [isLoading, setIsLoading] = useState(true);
    const [movieData, setMovieData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const movieData = await axios.get(MOVIE_DETAILS);
                setMovieData(movieData.data);
            } catch (err) {
                console.log(err);
                if (err.response.status === 404) {
                    setError('Movie could not be found.');
                }
                if (err.response.status === 500) {
                    setError('There is a problem with the server.')
                }
            }
            setIsLoading(false);
        }

        fetchData();
    }, []);

    const renderGenres = (genres) => {
        return genres.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>
        });
    }

    if (isLoading) {
        return 'is loading..';
    }

    if (error) {
        return error;
    }

    return (
        <div className="movie-detail">
            <div className="movie-detail__poster">
                <img src={IMAGE_PATH + movieData.poster_path} alt={`Poster of ${movieData.title}`} />
            </div>
            <div className="movie-detail__infos">
                <h1 className="movie-detail__title">{movieData.title}</h1>
                <h4>About the movie</h4>
                <p>{movieData.overview}</p>

                <h4>Genres:</h4>
                <ul>
                    {renderGenres(movieData.genres)}
                </ul>

            </div>
        </div>
    )
}

export default MovieDetail
