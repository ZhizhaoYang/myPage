import React, { Component } from "react";
import { scaleRotate as Menu } from "react-burger-menu";

import "./MenuScaleRotate.css";

export default class MenuScaleRotate extends Component {
  render() {
    return (
      <div>
        <Menu
          className="hamburgerMenu"
          width={"25%"}
          right
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        >
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="#/about">
            About
          </a>
          <a id="contact" className="menu-item" href="#/photos">
            Photos
          </a>
        </Menu>
      </div>
    );
  }
}
