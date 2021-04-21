import "./CurrentQuestion.scss";
import { connect } from "react-redux";
import { FormControlLabel, Checkbox } from "@material-ui/core";

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

  return (
    <div className="CurrentQuestion">
      <div className="correctAnswers">
        Correct Answers {correctAnswersLength}/{answersLength}
      </div>
      <div className="question">{currentData?.question}</div>
      <div className="answers">
        {answers.map((el) =>
          el.answer ? (
            <FormControlLabel
              key={el.index}
              control={<Checkbox name={el.index} color="default" />}
              label={el.answer}
            ></FormControlLabel>
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

export default connect(mapStateToProps)(CurrentQuestion);
