-- SET UP SCHEMA HERE
DROP DATABASE IF EXISTS badmovies;
CREATE DATABASE badmovies;
USE badmovies;

DROP TABLE IF EXISTS favorites;
CREATE TABLE favorites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  movie_id INT UNIQUE,
  title VARCHAR(255),
  release_date VARCHAR(24),
  vote_average DECIMAL(3,1),
  poster_path TEXT
);