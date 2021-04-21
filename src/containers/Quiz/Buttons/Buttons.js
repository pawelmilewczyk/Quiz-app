import Button from "../../../components/Button/Button";
import Horizontal from "../../../components/Horizontal/Horizontal";
import Aux from "../../../components/Aux/Aux";
import "./Buttons.scss";

import * as actions from "../../../store/actions";
import { connect } from "react-redux";

const Buttons = (props) => {
  const questionsNumber = props.data.length;

  const nextQuestionHandler = () =>
    props.setQuestion(props.currentQuestion + 1);

  const previousQuestionHandler = () =>
    props.setQuestion(props.currentQuestion - 1);

  const submitHandler = () => {};

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
        style={{ display: "grid", justifyContent: "center", padding: "2rem" }}
      >
        <Button type="submit" clicked={submitHandler}>
          Submit Answers
        </Button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
