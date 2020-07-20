import NameSpace from "../name-space.js";
import {getMoviesByFilterType} from "../../utils/filter.js";


const NAME_SPACE = NameSpace.DATA;

const getMovies = (state) => {
  return state[NAME_SPACE].allMovies;
};

const getMoviesToShow = (state) => {
  return state[NAME_SPACE].moviesToShow;
};

const getPromoMovie = (state) => {
  return state[NAME_SPACE].promoMovie;
};

const getActiveFilterType = (state) => {
  return state[NAME_SPACE].activeFilterType;
};

const getFilteredMovies = (state) => {
  return getMoviesByFilterType(
      state[NAME_SPACE].allMovies,
      state[NAME_SPACE].activeFilterType
  );
};

export {
  getActiveFilterType,
  getFilteredMovies,
  getPromoMovie,
  getMovies,
  getMoviesToShow,
};
