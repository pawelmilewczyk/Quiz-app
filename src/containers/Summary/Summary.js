import Button from "../../components/Button/Button";
import Score from "./Score/Score";
import Answers from "./Answers/Answers";

const Summary = (props) => {
  return (
    <div>
      <Score />
      <Answers />
      <Button>Try again</Button>
      <Button>Select new quiz</Button>
    </div>
  );
};

export default Summary;
