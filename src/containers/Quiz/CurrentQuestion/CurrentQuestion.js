import classes from "./CurrentQuestion.module.scss";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";

const CurrentQuestion = (props) => {
  const currentData = props.data[props.currentQuestion];
  const answers = [];
  if (currentData)
    for (const [key, value] of Object.entries(currentData.answers)) {
      answers.push({ index: key, answer: value });
    }

  return (
    <div className={classes.CurrentQuestion}>
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
