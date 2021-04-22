import classes from "./App.module.scss";
import Menu from "./containers/Menu/Menu";
import Quiz from "./containers/Quiz/Quiz";
import Summary from "./containers/Summary/Summary";

function App() {
  return (
    <div className={classes.App}>
      <Menu />
      <Quiz />
      <Summary />
    </div>
  );
}

export default App;
