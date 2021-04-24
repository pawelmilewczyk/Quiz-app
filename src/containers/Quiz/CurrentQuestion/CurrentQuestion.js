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
  //

  const answers = [];
  let correctAnswersLength = [];

  if (props.currentData) {
    for (const [key, value] of Object.entries(props.currentData.answers)) {
      answers.push({ name: key, answer: value });
    }

    correctAnswersLength = Object.values(
      props.currentData.correctAnswers
    ).filter((answer) => answer === "true").length;
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
        key={el.name}
        control={
          <Checkbox
            checked={updatedAnswers[props.currentQuestion][i]}
            name={el.name}
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
      <div className="question">{props.currentData?.question}</div>
      <div className="answers">{renderedAnswers}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentData: state.data[state.currentQuestion],
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
