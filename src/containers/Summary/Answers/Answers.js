import { connect } from "react-redux";
// import Title from "../../../components/Title/Title";
import Horizontal from "../../../components/Horizontal/Horizontal";
// import Paragraph from "../../../components/Paragraph/Paragraph";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import "./Answers.scss";

const Answers = (props) => {
  //
  //
  //

  const renderAnswer = (index, answers, isCorrectAnswersArray, isCorrect) => {
    let checkboxStyle;
    if (isCorrectAnswersArray || (!isCorrectAnswersArray && isCorrect))
      checkboxStyle = { color: "#32cd32" };

    if (!isCorrectAnswersArray && !isCorrect) checkboxStyle = { color: "red" };

    const indexesWithCorrectAnswers = answers[index].map((el, indexOfTrue) =>
      el === "true" ? indexOfTrue : null
    );

    return Object.values(props.data[index]?.answers).map((answer, i) => {
      if (answer) {
        const checkbox = indexesWithCorrectAnswers.includes(i) ? (
          <Checkbox checked={true} style={checkboxStyle} disabled={true} />
        ) : (
          <Checkbox checked={false} disabled={true} />
        );
        return (
          <FormControlLabel
            key={Math.random()}
            control={checkbox}
            label={answer}
          />
        );
      }
      return null;
    });
  };

  const content = props.data.map((el, index) => {
    const isCorrect =
      JSON.stringify(props.correctAnswers[index]) ===
      JSON.stringify(props.givenAnswers[index]);

    return (
      <div className="Question_Container" key={index}>
        <div className="Question">
          Question <span>{index + 1}</span>
        </div>
        <div className="Question_Content Question">
          Question: <span>{el.question}</span>
        </div>
        <div className="Answers">
          <div className="Answers_Title">Your Answers</div>
          {renderAnswer(index, props.givenAnswers, false, isCorrect)}
        </div>
        <div className="Answers">
          <div className="Answers_Title">Correct Answers</div>
          {renderAnswer(index, props.correctAnswers, true)}
        </div>
        <div
          className="feedback"
          style={isCorrect ? { color: "#32cd32" } : { color: "red" }}
        >
          {isCorrect ? "GOOD! 👍" : "WRONG"}
        </div>
      </div>
    );
  });

  return (
    <div>
      <Horizontal>Answers</Horizontal>
      {props.data.length ? content : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    correctAnswers: state.correctAnswers,
    givenAnswers: state.givenAnswers.map((el) => el.map((el) => el.toString())),
  };
};

export default connect(mapStateToProps)(Answers);
