import classes from "./Questions.module.scss";

const Questions = (props) => {
  return (
    <div className={classes.Grid}>
      <div className={[classes.Grid_item, classes.visited].join(" ")}>
        Question <span>1</span>
      </div>
      <div className={[classes.Grid_item, classes.visited].join(" ")}>
        Question <span>2</span>
      </div>
      <div className={[classes.Grid_item, classes.visited].join(" ")}>
        Question <span>3</span>
      </div>
      <div className={[classes.Grid_item, classes.visited].join(" ")}>
        Question <span>4</span>
      </div>
      <div className={[classes.Grid_item, classes.active].join(" ")}>
        Question <span>5</span>
      </div>
      <div className={classes.Grid_item}>
        Question <span>6</span>
      </div>
      <div className={classes.Grid_item}>
        Question <span>7</span>
      </div>
      <div className={classes.Grid_item}>
        Question <span>8</span>
      </div>
      <div className={classes.Grid_item}>
        Question <span>9</span>
      </div>
      <div className={classes.Grid_item}>
        Question <span>10</span>
      </div>
    </div>
  );
};

export default Questions;
