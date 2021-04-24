import "./Quizzes.scss";

import { connect } from "react-redux";
import * as actions from "../../../store/actions";

import { Link } from "react-router-dom";

const Quizzes = (props) => {
  const clickHandler = (e) => {
    const tag = e.target.parentNode.id;
    const difficulty = e.target.id.split("_")[1];
    props.setQuizName(tag);
    props.startQuiz();
    props.getData(tag, difficulty);
  };

  const renderQuiz = (title) => (
    <div className="Flex_item" key={title}>
      <div className="title">{title}</div>
      <div className="levels" id={title}>
        <Link to="/quiz" id={title + "_Easy"} onClick={clickHandler}>
          Easy
        </Link>
        <Link to="/quiz" id={title + "_Medium"} onClick={clickHandler}>
          Medium
        </Link>
        <Link to="/quiz" id={title + "_Hard"} onClick={clickHandler}>
          Hard
        </Link>
        <Link
          to="/quiz"
          id={title + "_"}
          onClick={clickHandler}
          className="random"
        >
          Random
        </Link>
      </div>
    </div>
  );

  return (
    <div className="Flex">
      {document.getElementById("searchBar")?.value
        ? props.filteredTitles.map((title) => renderQuiz(title))
        : props.titles.map((title) => renderQuiz(title))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    titles: state.titles,
    filteredTitles: state.filteredTitles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (tag, difficulty) => dispatch(actions.getData(tag, difficulty)),
    startQuiz: () => dispatch(actions.startQuiz()),
    setQuizName: (name) => dispatch(actions.setQuizName(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quizzes);
