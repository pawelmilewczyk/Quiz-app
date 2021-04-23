import classes from "./App.module.scss";
import Menu from "./containers/Menu/Menu";
import Quiz from "./containers/Quiz/Quiz";
import Summary from "./containers/Summary/Summary";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className={classes.App}>
      <Switch>
        <Route path="/quiz" component={Quiz} />
        <Route path="/summary" component={Summary} />
        <Route path="/" component={Menu} />
      </Switch>
    </div>
  );
}

export default App;
