import Title from "../../components/Title/Title";
import Spinner from "../../components/Spinner/Spinner";
import Horizontal from "../../components/Horizontal/Horizontal";
import Aux from "../../components/Aux/Aux";
import Questions from "./Questions/Questions";
import CurrentQuestion from "./CurrentQuestion/CurrentQuestion";
import Buttons from "./Buttons/Buttons";
import { connect } from "react-redux";

import { useEffect } from "react";

const Quiz = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let content = <Spinner />;
  if (props.isData)
    content = (
      <Aux>
        <Title>{props.quizName}</Title>
        <Questions />
        <Horizontal>Question {props.currentQuestion + 1}</Horizontal>
        <CurrentQuestion />
        <Horizontal />
        <Buttons />
      </Aux>
    );
  if (props.error)
    content = (
      <div
        style={{
          display: "grid",
          gap: "3rem",
          alignItems: "center",
          textAlign: "center",
          fontSize: "2.5rem",
        }}
      >
        <h2>Status Code {props.error.status}</h2>
        <h3>{props.error.message}</h3>
        <h4>
          {props.error.status === 401 ? "Your API KEY is incorrect" : null}
        </h4>
        <p style={{ fontSize: "10rem" }}>🥺</p>
      </div>
    );

  return content;
};

const mapStateToProps = (state) => {
  return {
    quizName: state.quizName,
    error: state.errorResponse,
    isData: state.data.length,
    currentQuestion: state.currentQuestion,
  };
};

export default connect(mapStateToProps)(Quiz);
