import * as actionTypes from "./actionTypes";
import axios from "axios";

const storeData = (data) => {
  const correctAnswers = [];
  data.map((el) => correctAnswers.push(Object.values(el.correctAnswers)));
  return {
    type: actionTypes.GET_DATA,
    data: data,
    correctAnswers: correctAnswers,
  };
};

export const getData = (tag, difficulty = "") => {
  const instance = axios.create({
    baseURL: "https://quizapi.io/api/v1/questions",
    params: {
      apiKey: "tygm5wOzRUEC8rkoLMWhPh6GvKr6UA9KX3GOCqvn",
      tags: tag,
      //tags: JavaScript, DevOps, HTML, Linux, Docker, PHP
      limit: 10,
      difficulty: difficulty,
    },
  });

  let data = [];
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
            tags: el.tags[0].name,
          })
        );
        dispatch(storeData(data));
      })
      .catch((err) => console.log(err));
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
