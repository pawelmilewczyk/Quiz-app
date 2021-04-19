import { Grid } from "@material-ui/core";
import "./Quizzes.scss";

const Quizzes = (props) => {
  const quizzes = ["JavaScript", "HTML", "Linux", "PHP", "Docker"];

  return (
    <Grid
      container
      justify="center"
      style={{ marginTop: "5rem", maxWidth: "1000px" }}
    >
      {quizzes.map((title) => (
        <Grid item>
          <div className="title">{title}</div>
          <div className="levels" id={title}>
            <span id={title + "Easy"}>Easy</span>
            <span id={title + "Medium"}>Medium</span>
            <span id={title + "Difficult"}>Difficult</span>
            <span className="random" id={title + "Random"}>
              Random
            </span>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Quizzes;
