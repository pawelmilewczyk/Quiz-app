import "./Quizzes.scss";
import { Grid } from "@material-ui/core";

import { connect } from "react-redux";

const Quizzes = (props) => {
  const renderQuiz = (title) => (
    <Grid item key={title}>
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
  );

  return (
    <Grid
      container
      justify="center"
      style={{ marginTop: "5rem", maxWidth: "1000px" }}
    >
      {props.filteredTitles.length
        ? props.filteredTitles.map((title) => renderQuiz(title))
        : props.titles.map((title) => renderQuiz(title))}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    titles: state.titles,
    filteredTitles: state.filteredTitles,
  };
};

export default connect(mapStateToProps)(Quizzes);
