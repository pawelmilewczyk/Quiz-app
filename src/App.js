import classes from "./App.module.scss";
import Menu from "./containers/Menu/Menu";
import Quiz from "./containers/Quiz/Quiz";

function App() {
  return (
    <div className={classes.App}>
      <Menu />
      <Quiz />
    </div>
  );
}

export default App;
