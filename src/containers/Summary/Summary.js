import Score from "./Score/Score";
import Answers from "./Answers/Answers";
import Buttons from "./Buttons/Buttons";

const Summary = (props) => {
  return (
    <div>
      <Score />
      <Answers />
      <Buttons />
    </div>
  );
};

export default Summary;
