import classes from "./Questions.module.scss";
import { connect } from "react-redux";

const Questions = (props) => {
  const clickHandler = (e) => {
    e.target
      .closest("div")
      .parentElement.childNodes.forEach((child) =>
        child.classList.remove(classes.active)
      );
    e.target.closest("div").classList.add(classes.visited, classes.active);
  };

  return (
    <div className={classes.Grid} onClick={clickHandler}>
      {props.data.map((_, index) => (
        <div className={classes.Grid_item} key={index} question={index}>
          Question <span>{index + 1}</span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Questions);
