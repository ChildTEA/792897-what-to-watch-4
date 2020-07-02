import FilterType from "../const/const.js";


const getComedyMovies = (moviesToFilter) => {
  return moviesToFilter.filter((movie) => movie.genre === `Comedy`);
};

const getCrimeMovies = (moviesToFilter) => {
  return moviesToFilter.filter((movie) => movie.genre === `Crime`);
};

const getDocumentaryMovies = (moviesToFilter) => {
  return moviesToFilter.filter((movie) => movie.genre === `Documentary`);
};

const getDramaMovies = (moviesToFilter) => {
  return moviesToFilter.filter((movie) => movie.genre === `Drama`);
};

const getHorrorMovies = (moviesToFilter) => {
  return moviesToFilter.filter((movie) => movie.genre === `Horror`);
};

const getFamilyMovies = (moviesToFilter) => {
  return moviesToFilter.filter((movie) => movie.genre === `Kids & Family`);
};

const getRomanceMovies = (moviesToFilter) => {
  return moviesToFilter.filter((movie) => movie.genre === `Romance`);
};

const getSciFiMovies = (moviesToFilter) => {
  return moviesToFilter.filter((movie) => movie.genre === `Sci-fi`);
};
const getThrillerMovies = (moviesToFilter) => {
  return moviesToFilter.filter((movie) => movie.genre === `Thriller`);
};

const getMoviesByFilterType = (movies, filterType) => {
  switch (filterType) {
    case FilterType.ALL:
      return movies;
    case FilterType.COMEDY:
      return getComedyMovies(movies);
    case FilterType.CRIME:
      return getCrimeMovies(movies);
    case FilterType.DOCUMENTARY:
      return getDocumentaryMovies(movies);
    case FilterType.DRAMA:
      return getDramaMovies(movies);
    case FilterType.HORROR:
      return getHorrorMovies(movies);
    case FilterType.FAMILY:
      return getFamilyMovies(movies);
    case FilterType.ROMANCE:
      return getRomanceMovies(movies);
    case FilterType.SCI_FI:
      return getSciFiMovies(movies);
    case FilterType.THRILLER:
      return getThrillerMovies(movies);
    default:
      return Object.assign({}, movies);
  }
};


export {getMoviesByFilterType};
