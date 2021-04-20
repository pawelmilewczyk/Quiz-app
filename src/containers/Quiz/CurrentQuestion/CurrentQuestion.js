import classes from "./CurrentQuestion.module.scss";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";

const CurrentQuestion = (props) => {
  console.log(props.data);
  const currentData = props.data[props.currentQuestion];

  const answers = currentData ? Object.values(currentData?.answers) : [];
  answers.map((answer) => console.log(answer));

  return (
    <div className={classes.CurrentQuestion}>
      <div className={classes.question}>{currentData?.question}</div>
      <div className={classes.answers}>
        {answers.map((answer) =>
          answer ? (
            <div className={classes.input_group}>
              <input type="checkbox" />
              <label>{answer}</label>
            </div>
          ) : null
        )}
      </div>
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
