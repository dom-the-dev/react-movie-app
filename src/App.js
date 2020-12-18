import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Header from './components/Header';

function App() {

    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/movie/:movieId">
                        <MovieDetail />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
