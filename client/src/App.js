import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Photos from "./components/Photos/Photos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/photos" component={Photos} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
