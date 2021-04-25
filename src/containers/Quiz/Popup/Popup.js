import "./Popup.scss";
import Paragraph from "../../../components/Paragraph/Paragraph";
import Button from "../../../components/Button/Button";
import Aux from "../../../components/Aux/Aux";
import { Link } from "react-router-dom";

const Popup = (props) => {
  const cancelHandler = () => props.showPopup(false);

  return (
    <Aux>
      <div className="Modal">
        <Paragraph>
          Are you sure? You have some questions without answer 🥺
        </Paragraph>
        <div className="ButtonContainer">
          <Link to="/summary">
            <Button type="submit">Submit</Button>
          </Link>
          <Button type="nav" clicked={cancelHandler}>
            Cancel
          </Button>
        </div>
      </div>
      <div className="Overlay" />
    </Aux>
  );
};

export default Popup;
