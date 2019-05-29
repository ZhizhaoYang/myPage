import React, { Component } from "react";
import { scaleRotate as Menu } from "react-burger-menu";

// import history from "../../history"

import "./MenuScaleRotate.css";

export default class MenuScaleRotate extends Component {
  refreshPage = e => {
    e.preventDefault();

    window.location.reload();
  };

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
          <a id="home" className="menu-item" href="#/">
            Home
          </a>
          <a id="about" className="menu-item" href="#/about">
            About
          </a>
          <a id="photos" className="menu-item" href="#/photos">
            Photos
          </a>
          <a
            id="portfolio"
            className="menu-item"
            href="#/portfolio"
            onClick={this.refreshPage}
          >
            Portfolio
          </a>
        </Menu>
      </div>
    );
  }
}
