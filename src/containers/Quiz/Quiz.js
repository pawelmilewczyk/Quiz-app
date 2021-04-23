import Title from "../../components/Title/Title";
import Horizontal from "../../components/Horizontal/Horizontal";
import Aux from "../../components/Aux/Aux";
import Questions from "./Questions/Questions";
import CurrentQuestion from "./CurrentQuestion/CurrentQuestion";
import Buttons from "./Buttons/Buttons";
import { connect } from "react-redux";

const Quiz = (props) => {
  return (
    <Aux>
      <Title>{props.tag}</Title>
      <Questions />
      <Horizontal>Current Question</Horizontal>
      <CurrentQuestion />
      <Horizontal />
      <Buttons />
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    tag: state.data[0]?.tags,
  };
};

export default connect(mapStateToProps)(Quiz);
