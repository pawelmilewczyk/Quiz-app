import { Button } from "@material-ui/core";
import classes from "./Button.module.scss";

const StyledButton = (props) => {
  let buttonClass = [classes.Button].join(" ");

  if (props.type === "nextBtn") {
    buttonClass = [classes.Button, classes.Secondary].join(" ");
    if (props.currentQuestion === props.questionsNumber - 1)
      buttonClass = classes.Hidden;
  }
  if (props.type === "prevBtn") {
    buttonClass = [classes.Button, classes.Secondary].join(" ");
    if (props.currentQuestion < 1) buttonClass = classes.Hidden;
  }

  if (props.type === "submit") {
  }

  return (
    <Button
      variant="outlined"
      className={buttonClass}
      type={props.type}
      onClick={props.clicked}
    >
      {props.children}
    </Button>
  );
};

export default StyledButton;
