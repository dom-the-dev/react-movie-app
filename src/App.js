import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';

const TRENDING_VIDEOS = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MOVIE_API}`

function App() {

    const [movies, setMovies] = useState(null);

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

    return (
        <div className="App">
            <h1 className="app-title">React Movie App</h1>
            <div className="movies">
                {movies && movies.length ? renderMovies(movies) : 'no movies available'}
            </div>
        </div>
    );
}

export default App;
