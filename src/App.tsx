import './App.scss';
import { useHistory, Switch, Route, Redirect } from "react-router-dom"
import Home from "./containers/Home"
import Offer from "./containers/Offer"

function App() {
  const history = useHistory();
  console.log(history)
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/offer" component={Offer} />
        <Redirect path="*" to="/home" />
      </Switch>
    </div>
  );
}

export default App;
