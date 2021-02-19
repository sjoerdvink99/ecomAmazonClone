import "./App.css";
import { Header, Home, Checkout } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const tijd = "2.52.46";

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
