const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getUniqueObjectValues = (object) => {
  const types = Object.values(object);
  const uniqueValues = types.filter((qurrent, index, values) => values.indexOf(qurrent) === index);

  return uniqueValues;
};

const findMovieById = (movies, id) => {
  const movieIndex = movies.findIndex((movie) => {
    const movieId = movie.id.toString();

    return movieId === id;
  });

  if (movieIndex < 0) {
    return null;
  }

  return movies[movieIndex];
};

const getSameGenreMovies = (movies, genre, maxCount = 4) => {
  const sameGenreMovies = movies.filter((movie) => {
    return movie.genre === genre;
  });

  if (!sameGenreMovies) {
    return null;
  }

  if (sameGenreMovies.length > maxCount) {
    return sameGenreMovies.slice(0, maxCount);
  }

  return sameGenreMovies;
};

export {extend, findMovieById, getSameGenreMovies, getUniqueObjectValues};
