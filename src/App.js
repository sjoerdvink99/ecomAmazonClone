import "./App.css";
import { Header, Home, Checkout, Login } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const tijd = "2.52.46";

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
