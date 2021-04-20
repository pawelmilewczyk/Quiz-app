import Title from "../../components/Title/Title";
import Questions from "./Questions/Questions";
import Horizontal from "../../components/Horizontal/Horizontal";

const Quiz = (props) => {
  return (
    <div className="Container">
      <Title>Course name</Title>
      <Questions />
      <Horizontal>Current Question</Horizontal>
    </div>
  );
};

export default Quiz;
