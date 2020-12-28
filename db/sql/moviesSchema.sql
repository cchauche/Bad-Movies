-- SET UP SCHEMA HERE
DROP DATABASE IF EXISTS badmovies;
CREATE DATABASE badmovies;
USE badmovies;

DROP TABLE IF EXISTS favorites;
CREATE TABLE favorites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  genre VARCHAR(50),
  year INT,
  rating DECIMAL(3,1),
  image LONGBLOB
);