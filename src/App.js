import "./App.scss";
import Menu from "./containers/Menu/Menu";
import Quiz from "./containers/Quiz/Quiz";
import Summary from "./containers/Summary/Summary";
import Aux from "./components/Aux/Aux";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function App(props) {
  const content = (
    <Aux>
      <Route path="/quiz" component={Quiz} />
      <Route path="/summary" component={Summary} />
    </Aux>
  );
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Menu} />
        {props.startQuiz ? content : <Redirect to="/" />}
      </Switch>
    </div>
  );
}

const mapStoreToProps = (state) => {
  return {
    startQuiz: state.startQuiz,
  };
};

export default connect(mapStoreToProps)(App);
