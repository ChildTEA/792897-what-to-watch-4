import {getUniqueObjectValues} from "../utils/utils.js";

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


export {FilterType, FilterTypes};
