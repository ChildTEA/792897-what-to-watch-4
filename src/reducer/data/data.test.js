import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";

import adaptPromoMovie from "../../adapter/promo-movie.js";
import adaptMovies from "../../adapter/movies.js";

import {FilterType} from "../../const/const.js";
import {fullMoviesDescriptions as movies, fullMovieDescription as promoMovie} from "../../const/tests.js";
import {getMoviesByFilterType} from "../../utils/filter.js";
import {reducer, ActionCreator, ActionType, Operation} from "./data.js";
import {moviesFromServer} from "../../const/tests.js";


const api = createAPI(() => {});


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    allMovies: [],
    activeFilterType: FilterType.ALL,
    promoMovie: {},
    moviesToShow: [],
  });
});

it(`Reducer should change activeFilterType by a given value`, () => {
  expect(reducer({
    activeFilterType: FilterType.ALL,
  },
  {
    type: ActionType.SET_FILTER_TYPE,
    payload: FilterType.COMEDY,
  })).toEqual({
    activeFilterType: FilterType.COMEDY,
  });
});

it(`Reducer should change moviesToShow correctly`, () => {
  const comedyMovies = getMoviesByFilterType(movies, FilterType.COMEDY);

  expect(reducer({
    allMovies: movies,
    activeFilterType: FilterType.COMEDY,
    promoMovie,
    moviesToShow: getMoviesByFilterType(movies, FilterType.ALL)
  },
  {
    type: ActionType.GET_MOVIES_BY_GENRE,
  })).toEqual({
    allMovies: movies,
    activeFilterType: FilterType.COMEDY,
    promoMovie,
    moviesToShow: comedyMovies,
  });
});


describe(`Action creators work correctly`, () => {
  it(`Action creator for setting filter type returns correct object`, () => {
    expect(ActionCreator.setFilterType(`TestType`)).toEqual({
      type: ActionType.SET_FILTER_TYPE,
      payload: `TestType`,
    });
  });

  it(`Action creator for getting movies returns correct object`, () => {
    expect(ActionCreator.getMoviesByGenre()).toEqual({
      type: ActionType.GET_MOVIES_BY_GENRE,
    });
  });
});

describe(`Operations work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieLoader = Operation.loadMovies();
    const response = moviesFromServer;
    const adaptedResponse = adaptMovies(response);

    apiMock
      .onGet(`/films`)
      .reply(200, response);

    return movieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: adaptedResponse,
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoMovieLoader = Operation.loadPromoMovie();
    const response = moviesFromServer[0];
    const adaptedResponse = adaptPromoMovie(response);

    apiMock
      .onGet(`/films/promo`)
      .reply(200, response);

    return promoMovieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_MOVIE,
          payload: adaptedResponse,
        });
      });
  });
});
