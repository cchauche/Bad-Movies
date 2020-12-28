import React from 'react';

let dummyGenres = [
  {
      "id": 28,
      "name": "Action"
  },
  {
      "id": 12,
      "name": "Adventure"
  },
  {
      "id": 16,
      "name": "Animation"
  },
  {
      "id": 35,
      "name": "Comedy"
  },
  {
      "id": 80,
      "name": "Crime"
  },
  {
      "id": 99,
      "name": "Documentary"
  },
  {
      "id": 18,
      "name": "Drama"
  },
  {
      "id": 10751,
      "name": "Family"
  },
  {
      "id": 14,
      "name": "Fantasy"
  },
  {
      "id": 36,
      "name": "History"
  },
  {
      "id": 27,
      "name": "Horror"
  },
  {
      "id": 10402,
      "name": "Music"
  },
  {
      "id": 9648,
      "name": "Mystery"
  },
  {
      "id": 10749,
      "name": "Romance"
  },
  {
      "id": 878,
      "name": "Science Fiction"
  },
  {
      "id": 10770,
      "name": "TV Movie"
  },
  {
      "id": 53,
      "name": "Thriller"
  },
  {
      "id": 10752,
      "name": "War"
  },
  {
      "id": 37,
      "name": "Western"
  }
];

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //todo: How do we get values in here to start out with?
      genres: dummyGenres,
      selectValue: ''
    };
  }

  //todo: do we need an 'oncomponent load function to get genres and set selectValue?

  getGenres() {
    //todo: make an axios request in this component to get the list of genres from your endpoint GET GENRES
  }

  handleChange(event) {
    // todo: remove this console log when done with component
    console.log('New selection: ', event.target.value);
    this.setState({
      selectValue: event.target.value
    })
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>


        <select value={this.state.selectValue} onChange={(e)=>{this.handleChange(e)}}>
          {this.state.genres.map((genre) => {
            return (<option value={genre.id} key={genre.id}>{genre.name}</option>)
          })}
        </select>
        <br/><br/>

        <button onClick={() => {this.props.getMovies(this.state.selectValue)}}>Search</button>

      </div>
    );
  }
}

export default Search;