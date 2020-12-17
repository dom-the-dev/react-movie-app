import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';

const TRENDING_VIDEOS = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MOVIE_API}`;
const SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}`

function App() {

    const [movies, setMovies] = useState(null);
    const [searchQuery, setSearchQuery] = useState(null);

    useEffect(() => {

        async function fetchData() {
            try {
                const movies = await axios.get(TRENDING_VIDEOS);
                setMovies(movies.data.results);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, [])

    const renderMovies = (movies) => {
        return movies.map(movie => {
            return <MovieCard key={movie.id} movie={movie} />
        })
    }

    const searchMovies = async (event, searchQuery) => {
        event.preventDefault();
        const query = searchQuery.replaceAll(' ', '+');

        try {
            const searchResult = await axios.get(`${SEARCH}&query=${query}`)
            setMovies(searchResult.data.results);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="App">
            <h1 className="app-title">React Movie App</h1>

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
    );
}

export default App;
