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

const getFilterTypes = () => {
  const types = Object.values(FilterType);
  const uniqueValues = types.filter((qurrent, index, values) => values.indexOf(qurrent) === index);

  return uniqueValues;
};

export {FilterType, getFilterTypes};
