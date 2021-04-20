import classes from "./Horizontal.module.scss";

const Horizontal = (props) => {
  return (
    <div className={classes.Horizontal}>
      <span className={classes.line}></span>
      <span
        className={
          props.children
            ? [classes.text, classes.padding].join(" ")
            : classes.text
        }
      >
        {props.children}
      </span>
      <span className={classes.line}></span>
    </div>
  );
};

export default Horizontal;
