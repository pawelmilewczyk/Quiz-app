import Button from "../../../components/Button/Button";
import Horizontal from "../../../components/Horizontal/Horizontal";
import Aux from "../../../components/Aux/Aux";
import Popup from "../Popup/Popup";
import "./Buttons.scss";

import { useState } from "react";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

const Buttons = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const emptyAnswers =
    props.correctAnswers.length -
    props.givenAnswers.filter((e) => e.includes("true")).length;

  const questionsNumber = props.data.length;

  const nextQuestionHandler = () =>
    props.setQuestion(props.currentQuestion + 1);

  const previousQuestionHandler = () =>
    props.setQuestion(props.currentQuestion - 1);

  const submitHandler = () => {
    props.givenAnswers.every((e) => e.includes("true"))
      ? setShowPopup(false)
      : setShowPopup(true);

    let score = 0;
    for (let i = 0; i < props.correctAnswers.length; i++) {
      if (
        JSON.stringify(props.correctAnswers[i]) ===
        JSON.stringify(props.givenAnswers[i])
      )
        score++;
    }
    props.setScore(score);
  };

  const submitButton = props.givenAnswers.every((e) => e.includes("true")) ? (
    <Link to="/summary">
      <Button type="submit" clicked={submitHandler}>
        Submit Answers
      </Button>
    </Link>
  ) : (
    <Button type="submit" clicked={submitHandler}>
      Submit Answers
    </Button>
  );

  return (
    <Aux>
      <div className="NavButtons">
        <Button
          type="prevBtn"
          clicked={previousQuestionHandler}
          currentQuestion={props.currentQuestion}
        >
          Previous question
        </Button>
        <Button
          type="nextBtn"
          clicked={nextQuestionHandler}
          questionsNumber={questionsNumber}
          currentQuestion={props.currentQuestion}
        >
          Next question
        </Button>
      </div>
      <Horizontal>Finish quiz</Horizontal>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem",
        }}
      >
        {submitButton}
      </div>
      {showPopup ? (
        <Popup showPopup={setShowPopup} emptyAnswers={emptyAnswers} />
      ) : null}
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    currentQuestion: state.currentQuestion,
    givenAnswers: state.givenAnswers.map((el) => el.map((el) => el.toString())),
    correctAnswers: state.correctAnswers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuestion: (index) => dispatch(actions.setCurrentQuestion(index)),
    setScore: (score) => dispatch(actions.setScore(score)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
