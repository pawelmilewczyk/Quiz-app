import Button from "../../../components/Button/Button";
import Horizontal from "../../../components/Horizontal/Horizontal";
import Aux from "../../../components/Aux/Aux";
import "./Buttons.scss";

import * as actions from "../../../store/actions";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

const Buttons = (props) => {
  const questionsNumber = props.data.length;

  const nextQuestionHandler = () =>
    props.setQuestion(props.currentQuestion + 1);

  const previousQuestionHandler = () =>
    props.setQuestion(props.currentQuestion - 1);

  const submitHandler = () => {
    const string = props.givenAnswers.map((el) =>
      el.map((el) => el.toString())
    );
    let score = 0;
    for (let i = 0; i < props.correctAnswers.length; i++) {
      if (JSON.stringify(props.correctAnswers[i]) === JSON.stringify(string[i]))
        score++;
    }
    props.setScore(score);
  };

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
        <Link to="/summary">
          <Button type="submit" clicked={submitHandler}>
            Submit Answers
          </Button>
        </Link>
      </div>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    currentQuestion: state.currentQuestion,
    givenAnswers: state.givenAnswers,
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
