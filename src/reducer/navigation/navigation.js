import {extend} from "../../utils/utils.js";


const initialState = {
  currentPage: `index`,
};

const ActionType = {
  SET_CURRENT_PAGE: `SET_CURRENT_PAGE`,
};

const ActionCreator = {
  setCurrentPage: (pageID) => {
    return {
      type: ActionType.SET_CURRENT_PAGE,
      payload: pageID,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_PAGE:
      return extend(state, {
        currentPage: action.payload,
      });
  }

  return state;
};


export {
  reducer,
  ActionCreator,
  ActionType,
};
