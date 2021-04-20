import classes from "./Questions.module.scss";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";

const Questions = (props) => {
  const clickHandler = (e) => {
    if (e.target.childNodes.length > 2) return;
    const div = e.target.closest("div");
    div.parentElement.childNodes.forEach((child) => {
      child.classList.remove(classes.active);
    });
    props.setQuestion(div.childNodes[1].innerHTML - 1);
  };

  return (
    <div className={classes.Grid} onClick={clickHandler}>
      {props.data.map((_, index) => (
        <div
          className={
            index === props.currentQuestion
              ? [classes.Grid_item, classes.visited, classes.active].join(" ")
              : classes.Grid_item
          }
          key={index}
          value={index}
        >
          Question <span>{index + 1}</span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    currentQuestion: state.currentQuestion,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuestion: (index) => dispatch(actions.setCurrentQuestion(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
