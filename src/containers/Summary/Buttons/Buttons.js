import Button from "../../../components/Button/Button";
import Horizontal from "../../../components/Horizontal/Horizontal";
import Aux from "../../../components/Aux/Aux";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

const Buttons = (props) => {
  const resetHandler = () => {
    props.reset();
  };

  const playAgainHandler = () => {
    props.playAgain();
  };

  return (
    <Aux>
      <Horizontal>What is your next move?</Horizontal>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "4rem",
        }}
      >
        <Button type="nextBtn" clicked={playAgainHandler}>
          Try again
        </Button>
        <Button type="nextBtn" clicked={resetHandler}>
          Select new quiz
        </Button>
      </div>
    </Aux>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch(actions.setInitState()),
    playAgain: () => dispatch(actions.playAgain()),
  };
};
export default connect(null, mapDispatchToProps)(Buttons);
