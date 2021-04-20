import * as actionTypes from "./actionTypes";

const initialState = {
  titles: ["JavaScript", "HTML", "Linux", "PHP", "Docker"],
  filteredTitles: [],
  data: [],
  currentQuestion: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TITLES:
      return { ...state, filteredTitles: action.titles };
    case actionTypes.GET_DATA:
      return { ...state, data: action.data };
    case actionTypes.SET_CURRENT_QUESTION:
      return { ...state, currentQuestion: action.question };
    default:
      return state;
  }
};

export default reducer;
