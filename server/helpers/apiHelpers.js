const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org
const discoverURL = 'https://api.themoviedb.org/3/discover/movie';
const genreURL = 'https://api.themoviedb.org/3/genre/movie/list';

const getTMDBGenres = () => {
  // Get  list of genres from API
  // Return a list of genres with their ids?
}

const getWorstOfGenre = (genreId) => {
  //Search for worst rated movies of a given genre
}

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file