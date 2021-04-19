import * as actionTypes from "./actionTypes";

const initialState = {
  titles: ["JavaScript", "HTML", "Linux", "PHP", "Docker"],
  filteredTitles: [],
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TITLES:
      return { ...state, filteredTitles: action.titles };
    case actionTypes.GET_DATA:
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default reducer;
