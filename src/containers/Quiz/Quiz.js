import Title from "../../components/Title/Title";
import Horizontal from "../../components/Horizontal/Horizontal";
import Questions from "./Questions/Questions";
import CurrentQuestion from "./CurrentQuestion/CurrentQuestion";
import Buttons from "./Buttons/Buttons";

const Quiz = (props) => {
  return (
    <div className="Container">
      <Title>Course name</Title>
      <Questions />
      <Horizontal>Current Question</Horizontal>
      <CurrentQuestion />
      <Horizontal />
      <Buttons />
    </div>
  );
};

export default Quiz;
