import "./CurrentQuestion.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { FormControlLabel, Checkbox } from "@material-ui/core";

import React, { useState } from "react";

const CurrentQuestion = (props) => {
  // FORCE UPDATE
  function useForceUpdate() {
    const [, setValue] = useState(0);
    return () => setValue((value) => value + 1);
  }
  const forceUpdate = useForceUpdate();

  let currentData = props.data[props.currentQuestion];
  const answers = [];
  let correctAnswersLength = [];

  if (currentData) {
    for (const [key, value] of Object.entries(currentData.answers)) {
      answers.push({ index: key, answer: value });
    }

    correctAnswersLength = Object.values(currentData.correctAnswers).filter(
      (answer) => answer === "true"
    ).length;
  }

  const answersLength = answers.filter((el) => el.answer).length;

  let updatedAnswers = props.givenAnswers;
  const changeHandler = (e) => {
    updatedAnswers[props.currentQuestion][e.target.value] = !updatedAnswers[
      props.currentQuestion
    ][e.target.value];
    props.setAnswer(updatedAnswers);
  };

  let renderedAnswers = answers.map((el, i) =>
    el.answer ? (
      <FormControlLabel
        key={el.index}
        control={
          <Checkbox
            checked={updatedAnswers[props.currentQuestion][i]}
            name={`${el.index}${props.currentQuestion}`}
            value={i}
            color="default"
            onChange={changeHandler}
            onClick={forceUpdate}
          />
        }
        label={el.answer}
      ></FormControlLabel>
    ) : null
  );

  return (
    <div className="CurrentQuestion">
      <div className="correctAnswers">
        Correct Answers {correctAnswersLength}/{answersLength}
      </div>
      <div className="question">{currentData?.question}</div>
      <div className="answers">{renderedAnswers}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    currentQuestion: state.currentQuestion,
    givenAnswers: state.givenAnswers,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    setAnswer: (answers) => dispatch(actions.setAnswer(answers)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(CurrentQuestion);
