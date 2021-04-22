import Button from "../../components/Button/Button";
import Score from "./Score/Score";

const Summary = (props) => {
  return (
    <div>
      <Score />
      <div>Questions</div>
      <Button>Try again</Button>
      <Button>Select new quiz</Button>
    </div>
  );
};

export default Summary;
