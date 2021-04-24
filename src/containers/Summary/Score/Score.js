import { connect } from "react-redux";
import Title from "../../../components/Title/Title";
import Horizontal from "../../../components/Horizontal/Horizontal";
import Paragraph from "../../../components/Paragraph/Paragraph";
import classes from "./Score.module.scss";

const Score = (props) => {
  const score =
    props.questions !== 0
      ? ((props.score / props.questions) * 100).toFixed(0)
      : 0;
  let feedback;
  if (score <= 30) feedback = "Oh, you have to study more! 😩 Try again!";
  if (score > 30 && score <= 50)
    feedback = "You know something, but it is not enough. 😕 Try again!";
  if (score > 50 && score <= 75)
    feedback = "Not bad! Try again and improve your score! 🤓";
  if (score > 75 && score <= 100)
    feedback = "Good job! Almost perfect score, try again and get 100%! 😎";
  if (+score === 100)
    feedback =
      "Perfect score! Congratulations! Now, you can choose another course! 💪";
  return (
    <div>
      <Title style={classes.Title}>Quiz: {props.quizName}</Title>
      <Horizontal>Quiz information</Horizontal>
      <Paragraph>{feedback}</Paragraph>
      <div className={classes.Score}>
        <span>
          Your score:{" "}
          <span style={score < 50 ? { color: "red" } : { color: "green" }}>
            {score}%
          </span>
        </span>
        <span>Correct answers: {props.score}</span>
        <span>Total questions: {props.questions}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quizName: state.quizName,
    score: state.score,
    questions: state.correctAnswers.length,
  };
};

export default connect(mapStateToProps)(Score);
