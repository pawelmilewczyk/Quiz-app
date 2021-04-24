import { Button } from "@material-ui/core";
import classes from "./Button.module.scss";

const StyledButton = (props) => {
  let buttonClass = [classes.Button].join(" ");
  let buttonDisabled = false;

  if (props.type === "nextBtn" || props.type === "nav") {
    buttonClass = [classes.Button, classes.Secondary].join(" ");
    if (props.currentQuestion === props.questionsNumber - 1)
      buttonDisabled = true;
  }
  if (props.type === "prevBtn") {
    buttonClass = [classes.Button, classes.Secondary].join(" ");
    if (props.currentQuestion < 1) buttonDisabled = true;
  }

  if (props.type === "submit") {
    buttonClass = [classes.Button, classes.Tertiary].join(" ");
  }

  return (
    <Button
      variant="outlined"
      className={buttonClass}
      type={props.type}
      onClick={props.clicked}
      disabled={buttonDisabled}
    >
      {props.children}
    </Button>
  );
};

export default StyledButton;
