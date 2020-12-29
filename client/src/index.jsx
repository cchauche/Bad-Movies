import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
// import AnyComponent from './components/filename.jsx'
import Search from "./components/Search.jsx";
import Movies from "./components/Movies.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favorites: [],
      showFaves: false,
    };

    this.swapFavorites = this.swapFavorites.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
  }

  componentDidMount() {
    this.getFavorites()
      .then((favorites) => {
        this.setState({
          favorites: favorites,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getMovies(genreId) {
    let params = { genre_id: genreId };
    axios
      .get("http://localhost:3000/movies/search", { params })
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getFavorites() {
    // Returns a promise that resolves to list of favorite movies
    return axios.get("http://localhost:3000/movies/").then(res => {
      return res.data;
    });
  }

  saveMovie(movieIndex) {
    console.log("Saving a movie...");
    let movie = this.state.movies[movieIndex];
    axios
      .post("http://localhost:3000/movies/save", movie)
      .then(() => {
        let updatedFaves = [...this.state.favorites, movie];
        this.setState({
          favorites: updatedFaves
        })
        console.log(`'${movie.title}' saved to favorites`);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  deleteMovie(movieId) {
    console.log("Deleting a movie...");
    axios
      .delete("http://localhost:3000/movies/delete/" + movieId)
      .then(() => {
        let favorites = this.state.favorites.slice();
        let removeInd = favorites.findIndex(movie => movieId === movie.id);
        let [movie] = favorites.splice(removeInd, 1);
        this.setState({favorites})
        console.log(`'${movie.title}' deleted from favorites`);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves,
    });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar">
          <h1>Bad Movies</h1>
        </header>

        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            getMovies={this.getMovies}
          />
          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            showFaves={this.state.showFaves}
            saveMovie={this.saveMovie}
            deleteMovie={this.deleteMovie}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
