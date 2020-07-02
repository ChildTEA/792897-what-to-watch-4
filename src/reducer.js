import {extend} from "./utils/utils.js";
import {movies, promoMovie} from "./mocks/movies.js";
import {FilterType} from "./const/const.js";
import {getMoviesByFilterType} from "./utils/filter.js";


const initialState = {
  allMovies: movies,
  activeFilterType: FilterType.ALL,
  promoMovie,
  moviesToShow: getMoviesByFilterType(movies, FilterType.ALL),
};

const ActionType = {
  SET_FILTER_TYPE: `SET_FILTER_TYPE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
};

const ActionCreator = {
  setFilterType: (filterType) => ({
    type: ActionType.SET_FILTER_TYPE,
    payload: filterType,
  }),

  getMoviesByGenre: () => ({
    type: ActionType.GET_MOVIES_BY_GENRE,
  }),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_TYPE:
      if (state.activeFilterType !== action.payload) {
        return extend(state, {activeFilterType: action.payload});
      }
      break;
    case ActionType.GET_MOVIES_BY_GENRE:
      const filteredMovies = getMoviesByFilterType(state.allMovies, state.activeFilterType);

      return extend(state, {moviesToShow: filteredMovies});

    default:
      return state;
  }

  return state;
};


export {reducer, ActionCreator, ActionType};
