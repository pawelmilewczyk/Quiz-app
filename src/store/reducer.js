import * as actionTypes from "./actionTypes";

const initialState = {
  titles: ["JavaScript", "HTML", "Linux", "PHP", "Docker"],
  filteredTitles: [],
  startQuiz: false,
  data: [],
  currentQuestion: 0,
  correctAnswers: [],
  givenAnswers: [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
  ],
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TITLES:
      return { ...state, filteredTitles: action.titles };
    case actionTypes.GET_DATA:
      return {
        ...state,
        data: action.data,
        correctAnswers: action.correctAnswers,
      };
    case actionTypes.SET_CURRENT_QUESTION:
      return { ...state, currentQuestion: action.question };
    case actionTypes.SET_ANSWER:
      return {
        ...state,
        givenAnswers: action.answers,
      };
    case actionTypes.SET_SCORE:
      return { ...state, score: action.score };
    case actionTypes.PLAY_AGAIN:
      return {
        ...state,
        currentQuestion: 0,
        givenAnswers: [
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
        ],
        score: 0,
      };
    case actionTypes.SET_INIT_STATE:
      return {
        ...state,
        startQuiz: false,
        data: [],
        correctAnswers: [],
        currentQuestion: 0,
        givenAnswers: [
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
        ],
        score: 0,
      };
    case actionTypes.START_QUIZ:
      return {
        ...state,
        givenAnswers: [
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
        ],
        startQuiz: true,
        currentQuestion: 0,
      };
    default:
      return state;
  }
};

export default reducer;
