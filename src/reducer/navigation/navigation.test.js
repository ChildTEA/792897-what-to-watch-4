import {reducer, ActionType, ActionCreator} from "./navigation.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    currentPage: `index`,
  });
});

it(`Reducer should set currentPage correctly`, () => {
  expect(reducer({currentPage: `index`}, {
    type: ActionType.SET_CURRENT_PAGE,
    payload: `001`,
  })).toEqual({
    currentPage: `001`,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for setting current page should return correct object`, () => {
    expect(ActionCreator.setCurrentPage(`003`)).toEqual({
      type: ActionType.SET_CURRENT_PAGE,
      payload: `003`,
    });
  });
});
