import "./Quizzes.scss";

import { connect } from "react-redux";
import * as actions from "../../../store/actions";

const Quizzes = (props) => {
  const clickHandler = (e) => {
    const tag = e.target.parentNode.id;
    const difficulty = e.target.id.split("_")[1];
    props.getData(tag, difficulty);
  };

  const renderQuiz = (title) => (
    <div className="Flex_item" key={title}>
      <div className="title">{title}</div>
      <div className="levels" id={title}>
        <span onClick={clickHandler} id={title + "_Easy"}>
          Easy
        </span>
        <span onClick={clickHandler} id={title + "_Medium"}>
          Medium
        </span>
        <span onClick={clickHandler} id={title + "_Hard"}>
          Hard
        </span>
        <span onClick={clickHandler} className="random" id={title + "_"}>
          Random
        </span>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quizzes);
