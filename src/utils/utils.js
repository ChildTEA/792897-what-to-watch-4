const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getUniqueObjectValues = (object) => {
  const types = Object.values(object);
  const uniqueValues = types.filter((qurrent, index, values) => values.indexOf(qurrent) === index);

  return uniqueValues;
};


export {extend, getUniqueObjectValues};
