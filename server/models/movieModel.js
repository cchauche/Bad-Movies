//Select one db to work with:

//For SQL
const sqlDb = require('../../db/sql');
//For Mongo
// const mongoDb = require('../../db/mongodb')

module.exports = {

  addFavorite: ({id, title, poster_path, release_date, vote_average}, callback) => {
    sqlQuery = 'INSERT INTO favorites (movie_id, title, poster_path, release_date, vote_average) VALUES (?,?,?,?,?)';
    sqlValues = [id, title, poster_path, release_date, vote_average];
    sqlDb.query(sqlQuery, sqlValues, (err) => {
      if (err) {
        callback(err);
        return;
      } else {
        callback(null);
      }
    })
  },

  deleteFavorite: (movieId) => {

  }

}