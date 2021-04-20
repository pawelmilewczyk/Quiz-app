import classes from "./App.module.scss";
import Menu from "./containers/Menu/Menu";

function App() {
  return (
    <div className={classes.App}>
      <Menu />
    </div>
  );
}

export default App;
