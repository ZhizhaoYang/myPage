import React, { Component } from "react";
// import "./App.css";

import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Test from "./components/Test";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/demos" component={Test} />
        </Switch>
      </div>
    );
  }
}

export default App;
