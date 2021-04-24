import classes from "./Title.module.scss";

const Title = (props) => {
  return (
    <h1 className={[classes.Title, props.style].join(" ")}>{props.children}</h1>
  );
};

export default Title;
