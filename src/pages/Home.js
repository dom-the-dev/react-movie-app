import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';

const TRENDING_VIDEOS = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`;
const SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}`

const Home = () => {

    const [movies, setMovies] = useState(null);
    const [searchQuery, setSearchQuery] = useState(null);

    useEffect(() => {
        fetchData(TRENDING_VIDEOS);
    }, [])

    const fetchData = async (apiUrl) => {
        const movies = await axios.get(apiUrl);
        setMovies(movies.data.results);
    }

    const renderMovies = (movies) => {
        return movies.map(movie => {
            return (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <MovieCard movie={movie} />
                </Link>
            )
        })
    }

    const searchMovies = async (event, searchQuery) => {
        event.preventDefault();
        const query = searchQuery.replaceAll(' ', '+');

        fetchData(`${SEARCH}&query=${query}`)
    }

    return (
        <div>
            <div className="search">
                <form onSubmit={(e) => searchMovies(e, searchQuery)}>
                    <input className={"search-input"} onChange={e => setSearchQuery(e.target.value)} type="text" placeholder={"Search"} />
                    <button className={"search-button"} type="submit">Go</button>
                </form>
            </div>

            <div className="movies">
                {movies && movies.length ? renderMovies(movies) : 'no movies available'}
            </div>
        </div>
    )
}

export default Home;