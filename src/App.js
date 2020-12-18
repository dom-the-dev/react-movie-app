import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Header from './components/Header';

function App() {

    return (
        <div className="App">
            <HashRouter basename="/">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/movie/:movieId">
                        <MovieDetail />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
