const movieModel = require("../models/movieModel.js");
const apiHelpers = require("../helpers/apiHelpers.js");

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre
    // https://www.themoviedb.org/account/signup
    // get your API KEY
    // use this endpoint to search for movies by genres, you will need an API key
    // https://api.themoviedb.org/3/discover/movie
    // and sort them by horrible votes using the search parameters in the API
    if (!req.query.hasOwnProperty("genre_id")) {
      res.sendStatus(406);
    } else {
      apiHelpers
        .getWorstOfGenre(req.query.genre_id)
        .then((responseData) => {
          res.status(200).json(responseData.results);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(501);
        });
    }
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    apiHelpers
      .getTMDBGenres()
      .then((genres) => {
        res.status(200).json(genres);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(501);
      });

    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list

    // send back
  },
  saveMovie: (req, res) => {
    let movie = req.body;
    movieModel.addFavorite(movie, (err) => {
      if (err) {
        console.error(err);
        res.sendStatus(406);
      } else {
        res.sendStatus(201);
      }
    })
  },
  deleteMovie: (req, res) => {
    console.log('Deleting Movie...');
    console.log(req.params);
    res.sendStatus(200);
  },
};
