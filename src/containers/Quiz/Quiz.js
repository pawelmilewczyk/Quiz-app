import Title from "../../components/Title/Title";
import Horizontal from "../../components/Horizontal/Horizontal";
import Questions from "./Questions/Questions";
import CurrentQuestion from "./CurrentQuestion/CurrentQuestion";

const Quiz = (props) => {
  return (
    <div className="Container">
      <Title>Course name</Title>
      <Questions />
      <Horizontal>Current Question</Horizontal>
      <CurrentQuestion />
    </div>
  );
};

export default Quiz;
