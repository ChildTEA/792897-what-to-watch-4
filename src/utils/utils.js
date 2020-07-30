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


export {extend, findMovieById, getUniqueObjectValues};
