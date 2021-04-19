import classes from "./Title.module.scss";

const Title = (props) => {
  return <h1 className={classes.Title}>{props.children}</h1>;
};

export default Title;
