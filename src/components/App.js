import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { AuthenticatedRoute } from "../helpers";
import '../styling/App.css';
import Login from "./Login"
import Home from "./Home"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
