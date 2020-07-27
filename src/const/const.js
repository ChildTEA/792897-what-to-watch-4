import {getUniqueObjectValues} from "../utils/utils.js";

const AppRoute = {
  LOGIN: `/sing-in`,
  MOVIE_DETAILS: `/movie-details`,
  ROOT: `/`,
};

const FilterType = {
  ALL: `All genres`,
  COMEDY: `Comedies`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMA: `Dramas`,
  HORROR: `Horror`,
  FAMILY: `Kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLER: `Thrillers`,
};

const FilterTypes = getUniqueObjectValues(FilterType);


export {AppRoute, FilterType, FilterTypes};
