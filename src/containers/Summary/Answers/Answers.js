import { connect } from "react-redux";
// import Title from "../../../components/Title/Title";
import Horizontal from "../../../components/Horizontal/Horizontal";
// import Paragraph from "../../../components/Paragraph/Paragraph";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import "./Answers.scss";

const Answers = (props) => {
  const renderAnswer = (index, answers) => {
    let indexes = [];
    answers[index].map((el, indexOfTrue) => {
      if (el === "true") indexes.push(indexOfTrue);
    });

    return Object.values(props.data[index]?.answers).map((answer, i) => {
      if (answer) {
        let checkbox;
        if (indexes.includes(i))
          checkbox = <Checkbox checked={true} disabled={true} />;
        else checkbox = <Checkbox checked={false} disabled={true} />;
        return (
          <FormControlLabel
            key={Math.random()}
            control={checkbox}
            label={answer}
          />
        );
      }
    });
  };

  const content = props.data.map((el, index) => (
    <div className="Question_Container" key={index}>
      <div className="Question">
        Question <span>{index + 1}</span>
      </div>
      <div className="Question_Content Question">
        Question: <span>{el.question}</span>
      </div>
      <div className="Answers Answers_Given">
        <div className="Answers_Title">Your Answers</div>
        {renderAnswer(index, props.givenAnswers)}
      </div>
      <div className="Answers Answers_Correct">
        <div className="Answers_Title">Correct Answers</div>
        {renderAnswer(index, props.correctAnswers)}
      </div>
      <div className="feedback">GOOD</div>
    </div>
  ));

  return (
    <div>
      <Horizontal>Answers</Horizontal>
      {props.data.length ? content : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    correctAnswers: state.correctAnswers,
    givenAnswers: state.givenAnswers.map((el) => el.map((el) => el.toString())),
  };
};

export default connect(mapStateToProps)(Answers);
