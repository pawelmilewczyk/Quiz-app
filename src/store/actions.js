import * as actionTypes from "./actionTypes";
import axios from "axios";
import { API_KEY, API_URL, QUESTION_LIMIT } from "./utilities";

const storeData = (data) => {
  const correctAnswers = [];
  data.map((el) => correctAnswers.push(Object.values(el.correctAnswers)));
  return {
    type: actionTypes.GET_DATA,
    data: data,
    correctAnswers: correctAnswers,
  };
};

const showError = (error) => {
  return {
    type: actionTypes.SHOW_ERROR,
    errorResponse: error,
  };
};

export const getData = (tag, difficulty = "") => {
  const instance = axios.create({
    baseURL: API_URL,
    params: {
      apiKey: API_KEY,
      tags: tag,
      limit: QUESTION_LIMIT,
      difficulty: difficulty,
    },
  });

  let data = [];
  let error = {};
  return (dispatch) => {
    instance
      .get()
      .then((res) => {
        res.data.map((el) =>
          data.push({
            question: el.question,
            answers: el.answers,
            correctAnswers: el.correct_answers,
            multipleCorrectAnswers: el.multiple_correct_answers,
          })
        );
        dispatch(storeData(data));
      })
      .catch((err) => {
        console.warn(err);
        error = {
          status: err.response.status,
          message: err.response.data.error,
        };
        dispatch(showError(error));
      });
  };
};

export const updateTitles = (updatedTitles) => {
  return {
    type: actionTypes.UPDATE_TITLES,
    titles: updatedTitles,
  };
};

export const setCurrentQuestion = (index) => {
  return {
    type: actionTypes.SET_CURRENT_QUESTION,
    question: index,
  };
};

export const setAnswer = (answers) => {
  return {
    type: actionTypes.SET_ANSWER,
    answers: answers,
  };
};

export const setScore = (score) => {
  return {
    type: actionTypes.SET_SCORE,
    score: score,
  };
};

export const playAgain = () => {
  return {
    type: actionTypes.PLAY_AGAIN,
  };
};

export const setInitState = () => {
  return {
    type: actionTypes.SET_INIT_STATE,
  };
};

export const startQuiz = () => {
  return {
    type: actionTypes.START_QUIZ,
  };
};

export const setQuizName = (name) => {
  return {
    type: actionTypes.SET_QUIZ_NAME,
    quizName: name,
  };
};

export const clearData = () => {
  return {
    type: actionTypes.CLEAR_DATA,
  };
};
