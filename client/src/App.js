import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Demos from "./components/Demos";
import Photos from "./components/Photos/Photos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/demos" component={Demos} />
          <Route exact path="/photos" component={Photos} />
        </Switch>
      </div>
    );
  }
}

export default App;
