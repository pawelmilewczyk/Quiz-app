import classes from "./CurrentQuestion.module.scss";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";
import Button from "../../../components/Button/Button";

const CurrentQuestion = (props) => {
  const currentData = props.data[props.currentQuestion];
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
  const questionsNumber = props.data.length;

  const nextQuestionHandler = () =>
    props.setQuestion(props.currentQuestion + 1);

  const previousQuestionHandler = () =>
    props.setQuestion(props.currentQuestion - 1);

  return (
    <div className={classes.CurrentQuestion}>
      <div className={classes.correctAnswers}>
        Correct Answers {correctAnswersLength}/{answersLength}
      </div>
      <div className={classes.question}>{currentData?.question}</div>
      <div className={classes.answers}>
        {answers.map((el) =>
          el.answer ? (
            <div className={classes.input_group} key={el.index}>
              <input type="checkbox" name={el.index} />
              <label>{el.answer}</label>
            </div>
          ) : null
        )}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CurrentQuestion);
