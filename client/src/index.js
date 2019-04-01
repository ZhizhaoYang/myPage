import React from "react";
import ReactDOM from "react-dom";
import "react-app-polyfill/ie9";
import "../node_modules/html5-boilerplate/dist/css/normalize.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "react-app-polyfill/ie9";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
