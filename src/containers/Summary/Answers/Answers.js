import { connect } from "react-redux";
// import Title from "../../../components/Title/Title";
import Horizontal from "../../../components/Horizontal/Horizontal";
// import Paragraph from "../../../components/Paragraph/Paragraph";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import "./Answers.scss";

const Answers = (props) => {
  return (
    <div>
      <Horizontal>Answers</Horizontal>
      <div className="Question_Container">
        <div className="Question">
          Question <span>1</span>
        </div>
        <div className="Question_Content Question">
          Question: <span>{props.data[0]?.question}</span>
        </div>
        <div className="Answers Answers_Given">
          <div className="Answers_Title">Your Answers</div>
          <FormControlLabel
            key="key"
            control={
              <Checkbox checked={true} color="default" disabled={true} />
            }
            label="Answer A"
          />
          <FormControlLabel
            className="correct"
            key="key"
            control={
              <Checkbox checked={true} color="default" disabled={true} />
            }
            label="Answer B"
          />
        </div>
        <div className="Answers Answers_Correct">
          <div className="Answers_Title">Correct Answers</div>
          <FormControlLabel
            className="wrong"
            key="key"
            control={
              <Checkbox checked={false} color="default" disabled={true} />
            }
            label="Answer A"
          />
          <FormControlLabel
            key="key"
            control={
              <Checkbox checked={true} color="default" disabled={true} />
            }
            label="Answer B"
          />
        </div>
        <div className="feedback">GOOD</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    // tag: state.data[0]?.tags,
    // score: state.score,
    correctAnswers: state.correctAnswers,
    givenAnswers: state.givenAnswers,
  };
};

export default connect(mapStateToProps)(Answers);
