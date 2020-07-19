import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.NAVIGATION;

const getCurrentPage = (store) => {
  return store[NAME_SPACE].currentPage;
};


export {
  getCurrentPage,
};
