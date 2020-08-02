import {reducer, ActionType, ActionCreator} from "./navigation.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    currentMovie: null,
  });
});

it(`Reducer should set currentPage correctly`, () => {
  expect(reducer({currentMovie: null}, {
    type: ActionType.SET_CURRENT_MOVIE,
    payload: `1`,
  })).toEqual({
    currentMovie: `1`,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for setting current movie should return correct object`, () => {
    expect(ActionCreator.setCurrentMovie(`3`)).toEqual({
      type: ActionType.SET_CURRENT_MOVIE,
      payload: `3`,
    });
  });
});
