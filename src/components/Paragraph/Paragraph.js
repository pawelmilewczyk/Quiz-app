import classes from "./Paragraph.module.scss";

const Paragraph = (props) => {
  return <p className={classes.Paragraph}>{props.children}</p>;
};

export default Paragraph;
