//Select one db to work with:

//For SQL
// const sqlDb = require("../../db/sql");
//For Mongo
const mongoose = require('mongoose');
const mongoDb = require('../../db/mongodb');


/**
 * *******************************************
 * mySQL MODELS
 * *******************************************
 */
// module.exports = {
//   addFavorite: (
//     { id, title, poster_path, release_date, vote_average },
//     callback
//   ) => {
//     sqlQuery =
//       "INSERT INTO favorites (movie_id, title, poster_path, release_date, vote_average) VALUES (?,?,?,?,?)";
//     sqlValues = [id, title, poster_path, release_date, vote_average];
//     sqlDb.query(sqlQuery, sqlValues, (err) => {
//       if (err) {
//         callback(err);
//         return;
//       }
//       callback(null);
//     });
//   },

//   deleteFavorite: (movieId, callback) => {
//     sqlQuery = "DELETE FROM favorites WHERE movie_id=?";
//     sqlValues = [movieId];
//     sqlDb.query(sqlQuery, sqlValues, (err) => {
//       if (err) {
//         callback(err);
//         return;
//       }
//       callback(null);
//     });
//   },

//   getFavorites: (callback) => {
//     sqlQuery = "SELECT movie_id AS id, title, release_date, vote_average, poster_path FROM favorites";
//     sqlDb.query(sqlQuery, (err, results) => {
//       if (err) {
//         callback(err);
//         return;
//       }
//       callback(null, results);
//     });
//   },
// };

/**
 * *******************************************
 * MongoDB MODELS
 * *******************************************
 */

const movieSchema = new mongoose.Schema({
  id: {type: Number, required: true},
  title: String,
  poster_path: String,
  release_date: String,
  vote_average: Number
})

const FavoriteModel = mongoose.model('Favorite', movieSchema);

//todo: Left of here need to try and add a movie to favorites
module.exports = {
  addFavorite: (movie, callback) => {
    //Add new movie to favorites
    FavoriteModel.create(movie, (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    })
  },

  deleteFavorite: (movieId, callback) => {
    // Delete a movie from favorites
    FavoriteModel.deleteOne({id:movieId}, (err) => {
      if (err) return callback(err);
      callback(null);
    })
  },

  getFavorites: (callback) => {
    // Get all the favorites
    FavoriteModel.find({},'-_id -__v',(err, favorites) => {
      if (err) return callback(err);
      callback(null, favorites);
    })
  },
};
