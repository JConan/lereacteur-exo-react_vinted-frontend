import './App.css';
import { useHistory, Switch, Route, Redirect, Link } from "react-router-dom"

function App() {
  const history = useHistory();
  console.log(history)
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={() => <div>Home: <Link to="/offer">go to Offer</Link></div>} />
        <Route path="/offer" component={() => <div>Offer: <Link to="/home">go to Home</Link> </div>} />
        <Redirect path="*" to="/home" />
      </Switch>
    </div>
  );
}

export default App;
