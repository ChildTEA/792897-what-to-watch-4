import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.NAVIGATION;

const getCurrentMovie = (store) => {
  return store[NAME_SPACE].currentMovie;
};


export {
  getCurrentMovie,
};
