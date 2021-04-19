import * as actionTypes from "./actionTypes";

const initialState = {
  titles: ["JavaScript", "HTML", "Linux", "PHP", "Docker"],
  filteredTitles: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TITLES:
      return { ...state, filteredTitles: action.titles };
    default:
      return state;
  }
};

export default reducer;
