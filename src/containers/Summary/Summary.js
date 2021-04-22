import { connect } from "react-redux";

const Summary = (props) => {
  return <div>Summary</div>;
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    tag: state.data[0]?.tags,
    score: state.score,
    correctAnswers: state.correctAnswers,
    givenAnswers: state.givenAnswers,
  };
};

export default connect(mapStateToProps)(Summary);
