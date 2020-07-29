import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";

import adaptMovie from "../../adapter/movie.js";
import adaptMovies from "../../adapter/movies.js";

import {FilterType} from "../../const/const.js";
import {fullMoviesDescriptions as movies} from "../../const/tests.js";
import {getMoviesByFilterType} from "../../utils/filter.js";
import {reducer, ActionCreator, ActionType, Operation} from "./data.js";
import {moviesFromServer} from "../../const/tests.js";


const api = createAPI(() => {});


describe(`Reducer tests runs correctly`, () => {
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
      promoMovie: movies[0],
      moviesToShow: getMoviesByFilterType(movies, FilterType.ALL)
    },
    {
      type: ActionType.GET_MOVIES_BY_GENRE,
    })).toEqual({
      allMovies: movies,
      activeFilterType: FilterType.COMEDY,
      promoMovie: movies[0],
      moviesToShow: comedyMovies,
    });
  });

  it(`Reducer should update only movies data correctly`, () => {
    // promoMovie is movies[0], so use another movies' item
    const movieIndex = 1;
    const movie = movies[movieIndex];
    const isFavorite = movie.isFavorite;
    const updatedMovie = Object.assign({}, movie, {isFavorite: !isFavorite});
    const updatedMovies = [...movies.slice(0, movieIndex), updatedMovie, ...movies.slice(movieIndex + 1)];

    expect(reducer({
      allMovies: movies,
      promoMovie: movies[0],
    },
    {
      type: ActionType.UPDATE_MOVIES,
      payload: updatedMovie,
    })).toEqual({
      allMovies: updatedMovies,
      promoMovie: movies[0],
    });
  });

  it(`Reducer should update both movies ond promo movie correctly`, () => {
    // Use the same movie as promoMovie and movie to update
    const movieIndex = 0;
    const movie = movies[movieIndex];
    const isFavorite = movie.isFavorite;
    const updatedMovie = Object.assign({}, movie, {isFavorite: !isFavorite});
    const updatedMovies = [...movies.slice(0, movieIndex), updatedMovie, ...movies.slice(movieIndex + 1)];

    expect(reducer({
      allMovies: movies,
      promoMovie: movie,
    },
    {
      type: ActionType.UPDATE_MOVIES,
      payload: updatedMovie,
    })).toEqual({
      allMovies: updatedMovies,
      promoMovie: updatedMovie,
    });
  });
});


describe(`Action creators work correctly`, () => {
  it(`Action creator for setting filter type returns correct object`, () => {
    expect(ActionCreator.setFilterType(`TestType`)).toEqual({
      type: ActionType.SET_FILTER_TYPE,
      payload: `TestType`,
    });
  });

  it(`Action creator for getting movies by genre returns correct object`, () => {
    expect(ActionCreator.getMoviesByGenre()).toEqual({
      type: ActionType.GET_MOVIES_BY_GENRE,
    });
  });

  it(`Action creator for load movies returns correct objects`, () => {
    const response = moviesFromServer;
    const adaptedResponse = adaptMovies(response);

    expect(ActionCreator.loadMovies(response)).toEqual({
      type: ActionType.LOAD_MOVIES,
      payload: adaptedResponse,
    });
  });

  it(`Action creator for loading promo movie returns correct object`, () => {
    const response = moviesFromServer[0];
    const adaptedResponse = adaptMovie(response);

    expect(ActionCreator.loadPromoMovie(response)).toEqual({
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: adaptedResponse,
    });
  });

  it(`Action creator for updating movies returns correct object`, () => {
    const response = moviesFromServer[0];
    const adaptedResponse = adaptMovie(response);

    expect(ActionCreator.updateMovies(response)).toEqual({
      type: ActionType.UPDATE_MOVIES,
      payload: adaptedResponse,
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
    const adaptedResponse = adaptMovie(response);

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
