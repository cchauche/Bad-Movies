import React from "react";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      selectValue: "",
    };
    this.getGenres = this.getGenres.bind(this);
  }

  componentDidMount() {
    this.getGenres()
      .then((genres) => {
        this.setState({
          genres: genres,
          selectValue: genres[0].id
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getGenres() {
    return axios.get("http://localhost:3000/movies/genres").then((response) => {
      return response.data;
    });
  }

  handleChange(event) {
    this.setState({
      selectValue: event.target.value,
    });
  }

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? "Show Results" : "Show Favorites"}
        </button>
        <br />
        <br />

        <select
          value={this.state.selectValue}
          onChange={(e) => {
            this.handleChange(e);
          }}
        >
          {this.state.genres.map((genre) => {
            return (
              <option value={genre.id} key={genre.id}>
                {genre.name}
              </option>
            );
          })}
        </select>
        <br />
        <br />

        <button
          onClick={() => {
            this.props.getMovies(this.state.selectValue);
          }}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
