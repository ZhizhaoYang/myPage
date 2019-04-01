import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Photos from "./components/Photos/Photos";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* basename attr for fixing the github pages deployment issue  */}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/photos" component={Photos} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
