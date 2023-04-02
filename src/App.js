import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryDetail from "./componant/countryDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/country/:capital" exact component={CountryDetail} />
        </Switch>
      </Router>
    );
  }
}

export default App;
