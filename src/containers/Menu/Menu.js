import classes from "./Menu.module.scss";
// import Aux from "../../components/Aux/Aux";
import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import SearchBar from "./SearchBar/SearchBar";
import Quizzes from "./Quizzes/Quizzes";

const Menu = (props) => {
  return (
    <div className={classes.Menu}>
      <Title style={classes.Title}>Quiz App</Title>
      <Paragraph>
        Choose one of our quizzes! You can use the search bar to filter what you
        need
      </Paragraph>
      <SearchBar />
      <Quizzes />
    </div>
  );
};

export default Menu;
