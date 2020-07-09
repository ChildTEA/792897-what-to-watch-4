import {getMoviesByFilterType} from "./filter.js";
import {FilterType} from "../const/const.js";


const movies = [
  {
    title: `1`,
    genre: `Comedy`,
  },
  {
    title: `1`,
    genre: `Crime`,
  },
  {
    title: `1`,
    genre: `Crime`,
  },
  {
    title: `1`,
    genre: `Documentary`,
  },
  {
    title: `1`,
    genre: `Drama`,
  },
  {
    title: `1`,
    genre: `Horror`,
  },
  {
    title: `1`,
    genre: `Kids & Family`,
  },
  {
    title: `1`,
    genre: `Romance`,
  },
  {
    title: `1`,
    genre: `Sci-fi`,
  },
  {
    title: `1`,
    genre: `Comedy`,
  },
  {
    title: `1`,
    genre: `Comedy`,
  },
];


it(`Should return correct movies`, () => {
  const listLength = movies.length;

  expect(getMoviesByFilterType(movies, FilterType.ALL).length).toBe(listLength);
  expect(getMoviesByFilterType(movies, FilterType.COMEDY).length).toBe(3);
  expect(getMoviesByFilterType(movies, FilterType.CRIME).length).toBe(2);
  expect(getMoviesByFilterType(movies, FilterType.DOCUMENTARY).length).toBe(1);
  expect(getMoviesByFilterType(movies, FilterType.DRAMA).length).toBe(1);
  expect(getMoviesByFilterType(movies, FilterType.HORROR).length).toBe(1);
  expect(getMoviesByFilterType(movies, FilterType.FAMILY).length).toBe(1);
  expect(getMoviesByFilterType(movies, FilterType.ROMANCE).length).toBe(1);
  expect(getMoviesByFilterType(movies, FilterType.SCI_FI).length).toBe(1);
  expect(getMoviesByFilterType(movies, FilterType.THRILLER).length).toBe(0);
});
