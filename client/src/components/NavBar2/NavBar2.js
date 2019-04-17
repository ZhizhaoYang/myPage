import React, { Component } from "react";

import Header from "./Header";
import MenuScaleRotate from "./MenuScaleRotate";

export default class NavBar2 extends Component {
  render() {
    return (
      <div>
        <MenuScaleRotate />
        <Header />
      </div>
    );
  }
}
