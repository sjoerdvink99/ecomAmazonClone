import "./App.css";
import { Header, Home, Checkout } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const tijd = "1.05.53";

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
