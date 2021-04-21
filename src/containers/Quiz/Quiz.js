import Title from "../../components/Title/Title";
import Horizontal from "../../components/Horizontal/Horizontal";
import Questions from "./Questions/Questions";
import CurrentQuestion from "./CurrentQuestion/CurrentQuestion";
import Buttons from "./Buttons/Buttons";
import { connect } from "react-redux";

const Quiz = (props) => {
  return (
    <div>
      <Title>{props.tag}</Title>
      <Questions />
      <Horizontal>Current Question</Horizontal>
      <CurrentQuestion />
      <Horizontal />
      <Buttons />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tag: state.data[0].tags,
  };
};

export default connect(mapStateToProps)(Quiz);
