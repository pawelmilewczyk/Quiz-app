import Button from "../../../components/Button/Button";
import Horizontal from "../../../components/Horizontal/Horizontal";
import Aux from "../../../components/Aux/Aux";

import { connect } from "react-redux";
import * as actions from "../../../store/actions";

import { Link } from "react-router-dom";

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
          marginTop: "3rem",
        }}
      >
        <Link to="/quiz">
          <Button type="nav" clicked={playAgainHandler}>
            Try again
          </Button>
        </Link>
        <Link to="/">
          <Button type="nav" clicked={resetHandler}>
            Select new quiz
          </Button>
        </Link>
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
