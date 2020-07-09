import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {movies, promoMovie} from "./mocks/movies.js";
import {FilterType} from "./const/const.js";
import {getMoviesByFilterType} from "./utils/filter.js";


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    allMovies: movies,
    activeFilterType: FilterType.ALL,
    promoMovie,
    moviesToShow: getMoviesByFilterType(movies, FilterType.ALL),
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
