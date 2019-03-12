import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import "../node_modules/html5-boilerplate/dist/css/normalize.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "react-app-polyfill/ie9";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
