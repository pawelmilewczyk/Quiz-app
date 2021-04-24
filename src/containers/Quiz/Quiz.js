import Title from "../../components/Title/Title";
import Spinner from "../../components/Spinner/Spinner";
import Horizontal from "../../components/Horizontal/Horizontal";
import Aux from "../../components/Aux/Aux";
import Questions from "./Questions/Questions";
import CurrentQuestion from "./CurrentQuestion/CurrentQuestion";
import Buttons from "./Buttons/Buttons";
import { connect } from "react-redux";

const Quiz = (props) => {
  return props.isData ? (
    <Aux>
      <Title>{props.quizName}</Title>
      <Questions />
      <Horizontal>Question {props.currentQuestion}</Horizontal>
      <CurrentQuestion />
      <Horizontal />
      <Buttons />
    </Aux>
  ) : (
    <Spinner />
  );
};

const mapStateToProps = (state) => {
  return {
    quizName: state.quizName,
    isData: state.data.length,
    currentQuestion: state.currentQuestion,
  };
};

export default connect(mapStateToProps)(Quiz);
