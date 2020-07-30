import {extend} from "../../utils/utils.js";
import {FilterType} from "../../const/const.js";
import {getMoviesByFilterType} from "../../utils/filter.js";
import adaptMovie from "../../adapter/movie.js";
import adaptMovies from "../../adapter/movies.js";


const initialState = {
  allMovies: [],
  activeFilterType: FilterType.ALL,
  promoMovie: {},
  moviesToShow: [],
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  SET_FILTER_TYPE: `SET_FILTER_TYPE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  UPDATE_MOVIES: `UPDATE_MOVIES`,
};

const ActionCreator = {
  loadMovies: (movies) => {
    const adaptedMovies = adaptMovies(movies);

    return {
      type: ActionType.LOAD_MOVIES,
      payload: adaptedMovies,
    };
  },

  loadPromoMovie: (movie) => {
    const adaptedMovie = adaptMovie(movie);

    return {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: adaptedMovie,
    };
  },

  setFilterType: (filterType) => ({
    type: ActionType.SET_FILTER_TYPE,
    payload: filterType,
  }),

  getMoviesByGenre: () => ({
    type: ActionType.GET_MOVIES_BY_GENRE,
  }),


  updateMovies: (movie) => {
    const adaptedMovie = adaptMovie(movie);

    return {
      type: ActionType.UPDATE_MOVIES,
      payload: adaptedMovie,
    };
  },
};

const Operation = {
  addToFavorites: (movieId, isFavorite) => (dispatch, getState, api) => {
    const status = isFavorite ? `0` : `1`;

    return api.post(`/favorite/${movieId}/${status}`, {})
      .then((response) => {
        dispatch(ActionCreator.updateMovies(response.data));
      });
  },

  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(response.data));
      })
      .then(() => {
        dispatch(ActionCreator.getMoviesByGenre());
      });
  },

  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoMovie(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        allMovies: action.payload,
      });

    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload,
      });

    case ActionType.SET_FILTER_TYPE:
      if (state.activeFilterType !== action.payload) {
        return extend(state, {
          activeFilterType: action.payload
        });
      }
      break;

    case ActionType.GET_MOVIES_BY_GENRE:
      const filteredMovies = getMoviesByFilterType(state.allMovies, state.activeFilterType);

      return extend(state, {
        moviesToShow: filteredMovies
      });

    case ActionType.UPDATE_MOVIES:
      let movies = state.allMovies;
      const promoMovie = state.promoMovie;
      const movie = action.payload;

      const movieIndex = movies.findIndex((item) => item.id === movie.id);

      movies = [...movies.slice(0, movieIndex), movie, ...movies.slice(movieIndex + 1)];

      if (promoMovie.id === movie.id) {
        return extend(state, {
          allMovies: movies,
          promoMovie: movie,
        });
      }

      return extend(state, {
        allMovies: movies,
      });

    default:
      return state;
  }

  return state;
};


export {
  reducer,
  ActionCreator,
  ActionType,
  Operation,
};
