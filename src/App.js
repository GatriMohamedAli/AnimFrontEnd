import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import SingleEmp from "./Components/SingleEmp";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/single/:id'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
