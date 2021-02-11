import Calendar from "./Calendar";
import Month from "./Month";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Calendar} />
        <Route path="/month/:year/:id" component={Month} />
      </Switch>
    </HashRouter>
  );
}

export default App;
