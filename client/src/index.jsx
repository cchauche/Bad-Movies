import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

let dummyMovies = [
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
          10751,
          16
      ],
      "id": 779858,
      "original_language": "de",
      "original_title": "Wallace & Gromit - 3 unglaubliche Abenteuer",
      "overview": "",
      "popularity": 1.093,
      "poster_path": null,
      "release_date": "2009-03-04",
      "title": "Wallace & Gromit - 3 unglaubliche Abenteuer",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
          16
      ],
      "id": 779813,
      "original_language": "ja",
      "original_title": "ワンピース フィルム ゴールド~episode 0~ 711ver.",
      "overview": "",
      "popularity": 1.96,
      "poster_path": "/wPBFqO9zeSjX3bK9NMvhm9xL1Le.jpg",
      "release_date": "2016-07-02",
      "title": "ワンピース フィルム ゴールド~episode 0~ 711ver.",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
          16
      ],
      "id": 779648,
      "original_language": "en",
      "original_title": "Greenpeace: There's a Monster in My Kitchen",
      "overview": "A jaguar's forest home is being burned to grow animal feed for the meat industry. If we don't act, more precious habitats will be destroyed, Indigenous Peoples could lose their homes, and we'll lose the fight against climate change. Narrated by Narcos star Wagner Moura and designed by Cartoon Saloon, Monster tells the story of how industrial meat is wreaking havoc on forests across South America.",
      "popularity": 1.119,
      "poster_path": "/dQh5hVko6gXKZjZSOZklsbwvwyC.jpg",
      "release_date": "2020-10-22",
      "title": "Greenpeace: There's a Monster in My Kitchen",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
          16
      ],
      "id": 779607,
      "original_language": "en",
      "original_title": "Aurora",
      "overview": "A little girl falls in love with a beautiful horse named Aurora. A bittersweet story about love, friendship, and growing up.",
      "popularity": 0.962,
      "poster_path": "/9dBXfgPI9869Y5Ru9tWAm75jKlo.jpg",
      "release_date": "2020-07-30",
      "title": "Aurora",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": "/5a5dzNWMNxacQywufvprmfahpgJ.jpg",
      "genre_ids": [
          14,
          16,
          12
      ],
      "id": 779563,
      "original_language": "en",
      "original_title": "54321",
      "overview": "In this animated short film featuring Matthew Mcdaid's song, we accompany Joan on a journey through space as he tries to escape from the mossy walls of  the factory he works in.",
      "popularity": 2.744,
      "poster_path": "/jhQlaqAApfv4C98HsNs4m29yjvj.jpg",
      "release_date": "2020-12-22",
      "title": "54321",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
          16
      ],
      "id": 779440,
      "original_language": "en",
      "original_title": "ぴよぴよバーバ",
      "overview": "",
      "popularity": 0.627,
      "poster_path": null,
      "release_date": "2002-11-27",
      "title": "Piyopiyo Baba",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
          16
      ],
      "id": 779421,
      "original_language": "en",
      "original_title": "The Mecanorgans",
      "overview": "Within the ecosystem, some strange creatures interact with each other. Organic and mechanical at the same time, some communicate, some reproduce their biological cycles and some others fight for their own survival.",
      "popularity": 0.6,
      "poster_path": null,
      "release_date": "",
      "title": "The Mecanorgans",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": "/qbW139W8GTSKy7DQvOpIhMMrf8a.jpg",
      "genre_ids": [
          35,
          16
      ],
      "id": 779228,
      "original_language": "es",
      "original_title": "Maraia: La Película",
      "overview": "María and Amaia win an all-expenses-paid trip with their friends to Benidorm but, when they arrive, they find themselves without resources and decide to sing in the street to earn some money. The success of their street performances will lead them to sign up for a talent show with a € 3,000 prize!",
      "popularity": 3.842,
      "poster_path": "/yzP0F9tLdkV8HCdHjKinGhTEEdy.jpg",
      "release_date": "2020-12-23",
      "title": "Maraia: The Movie",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
          16
      ],
      "id": 779132,
      "original_language": "en",
      "original_title": "Coyote Vs. Acme",
      "overview": "Based on the Wile E. Coyote character and fictitious Acme corporation from the Looney Tunes.",
      "popularity": 2.401,
      "poster_path": null,
      "release_date": "2023-07-20",
      "title": "Coyote Vs. Acme",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": "/A8sQOGkSQut32VJyQ3mwnf3YKSd.jpg",
      "genre_ids": [
          16
      ],
      "id": 779122,
      "original_language": "pt",
      "original_title": "Noite Difícil",
      "overview": "",
      "popularity": 4.759,
      "poster_path": "/qLuZZ7oCxjPV1pSgwJkQkJIfE5x.jpg",
      "release_date": "2020-12-23",
      "title": "Noite Difícil",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  }
];
let dummyFaves = [
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
          12,
          28,
          16
      ],
      "id": 780547,
      "original_language": "ja",
      "original_title": "ハンター×ハンター",
      "overview": "Hunter x Hunter is set in a world where Hunters exist to perform all manner of dangerous tasks like capturing criminals and bravely searching for lost treasures in uncharted territories. Twelve-year-old Gon Freecss is determined to become the best Hunter possible in hopes of finding his father, who was a Hunter himself and had long ago abandoned his young son. However, Gon soon realizes the path to achieving his goals is far more challenging than he could have ever imagined.",
      "popularity": 0,
      "poster_path": null,
      "release_date": "2011-10-02",
      "title": "Hunter x Hunter",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": "/9Zuf85SFXiM8ixa2EOU0B0RuWBb.jpg",
      "genre_ids": [
          16,
          878,
          28,
          53
      ],
      "id": 780310,
      "original_language": "en",
      "original_title": "Spinning Primate: Judgement Day",
      "overview": "Being the sequel to the original Spinning Primate, a robotic chimpanzee from the future to wreak havoc on humanity.",
      "popularity": 0,
      "poster_path": "/g1WpqykFR5uX5XFvThv9Bz99BSL.jpg",
      "release_date": "2020-08-02",
      "title": "Spinning Primate: Judgement Day",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
          28
      ],
      "id": 780030,
      "original_language": "tl",
      "original_title": "Dayo",
      "overview": "A man in another land",
      "popularity": 0.6,
      "poster_path": "/uvjVpAC9F4x8GhwLs9ESyVGOgR2.jpg",
      "release_date": "2003-05-21",
      "title": "Stranger",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
          28,
          35,
          12
      ],
      "id": 779941,
      "original_language": "it",
      "original_title": "Saetta e le sette mogli del Pascià",
      "overview": "",
      "popularity": 0.6,
      "poster_path": null,
      "release_date": "1926-04-19",
      "title": "Saetta e le sette mogli del Pascià",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
          28,
          35,
          12
      ],
      "id": 779940,
      "original_language": "it",
      "original_title": "Caporal Saetta",
      "overview": "",
      "popularity": 0.6,
      "poster_path": null,
      "release_date": "1924-12-01",
      "title": "Caporal Saetta",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  }
];

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: dummyMovies,
      favorites: dummyFaves,
      showFaves: false,
    };

    // you might have to do something important here!
    this.swapFavorites = this.swapFavorites.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies(genreId) {
    // make an axios request to your server on the GET SEARCH endpoint
    console.log('Getting movies of genre: ', genreId)
  }

  saveMovie() {
    // same as above but do something diff
    console.log('Saving a movie...')
  }

  deleteMovie() {
    // same as above but do something diff
    console.log('Deleting a movie...')
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>

        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves} saveMovie={this.saveMovie} deleteMovie={this.deleteMovie} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));