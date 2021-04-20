import { Button } from "@material-ui/core";
import classes from "./Button.module.scss";

const StyledButton = (props) => {
  return (
    <Button
      variant="outlined"
      className={
        props.type
          ? [classes.Tertiary, classes.Button].join(" ")
          : [classes.Secondary, classes.Button].join(" ")
      }
      type={props.type}
      onClick={props.clicked}
    >
      {props.children}
    </Button>
  );
};

export default StyledButton;
