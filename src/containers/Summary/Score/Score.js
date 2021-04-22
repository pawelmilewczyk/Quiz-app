import { connect } from "react-redux";
import Title from "../../../components/Title/Title";
import Horizontal from "../../../components/Horizontal/Horizontal";
import Paragraph from "../../../components/Paragraph/Paragraph";
import "./Score.scss";

const Score = (props) => {
  const score = (props.score / props.questions).toFixed(0) * 100;
  let feedback;
  if (score <= 30) feedback = "Oh, you have to study more! 😩 Try again!";
  if (score > 30 && score <= 50)
    feedback = "You know something, but it is not enough. 😕 Try again!";
  if (score > 50 && score <= 75)
    feedback = "Not bad! Try again and improve your score! 🤓";
  if (score > 75 && score <= 100)
    feedback = "Good job! Almost perfect score, try again and get 100%! 😎";
  if (score === 0)
    feedback =
      "Perfect score! Congratulations! Now, you can choose another course! 💪";
  return (
    <div>
      <Title>Quiz: {props.tag}</Title>
      <Horizontal>Quiz information</Horizontal>
      <Paragraph>{feedback}</Paragraph>
      <div className="Score">
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
    // data: state.data,
    tag: state.data[0]?.tags,
    score: state.score,
    questions: state.correctAnswers.length,
    // givenAnswers: state.givenAnswers,
  };
};

export default connect(mapStateToProps)(Score);
