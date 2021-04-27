import reducer from "./reducer";
import { initialState } from "./reducer";
import * as actionTypes from "./actionTypes";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
    expect(
      reducer(initialState, {
        type: actionTypes.SET_INIT_STATE,
      })
    ).toEqual(initialState);
  });
  it("should set quiz name", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_QUIZ_NAME,
        quizName: "quizName",
      })
    ).toEqual({ ...initialState, quizName: "quizName" });
  });
});
