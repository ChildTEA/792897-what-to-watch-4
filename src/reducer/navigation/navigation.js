import {extend} from "../../utils/utils.js";


const initialState = {
  currentMovie: null,
};

const ActionType = {
  SET_CURRENT_MOVIE: `SET_CURRENT_MOVIE`,
};

const ActionCreator = {
  setCurrentMovie: (movieID) => {
    return {
      type: ActionType.SET_CURRENT_MOVIE,
      payload: movieID,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_MOVIE:
      return extend(state, {
        currentMovie: action.payload,
      });
  }

  return state;
};


export {
  reducer,
  ActionCreator,
  ActionType,
};
