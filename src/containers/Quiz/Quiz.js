import Title from "../../components/Title/Title";
import Questions from "./Questions/Questions";

const Quiz = (props) => {
  return (
    <div className="Container">
      <Title>Course name</Title>
      <Questions />
    </div>
  );
};

export default Quiz;
