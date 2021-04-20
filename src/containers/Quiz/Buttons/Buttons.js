import Button from "../../../components/Button/Button";
import Horizontal from "../../../components/Horizontal/Horizontal";
import Aux from "../../../components/Aux/Aux";

import * as actions from "../../../store/actions";
import { connect } from "react-redux";

const Buttons = (props) => {
  const questionsNumber = props.data.length;

  const nextQuestionHandler = () =>
    props.setQuestion(props.currentQuestion + 1);

  const previousQuestionHandler = () =>
    props.setQuestion(props.currentQuestion - 1);

  return (
    <Aux>
      <div>
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
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    currentQuestion: state.currentQuestion,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuestion: (index) => dispatch(actions.setCurrentQuestion(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
