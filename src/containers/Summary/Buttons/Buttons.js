import Button from "../../../components/Button/Button";
import Horizontal from "../../../components/Horizontal/Horizontal";
import Aux from "../../../components/Aux/Aux";

const Buttons = (props) => {
  return (
    <Aux>
      <Horizontal>What is your next move?</Horizontal>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "4rem",
        }}
      >
        <Button type="nextBtn">Try again</Button>
        <Button type="nextBtn">Select new quiz</Button>
      </div>
    </Aux>
  );
};
export default Buttons;
