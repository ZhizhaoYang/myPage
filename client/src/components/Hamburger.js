import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

export default class Hamburger extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let homeOption;
    let aboutOption;
    let photosOption;
    const currentRoute = window.location.pathname;
    if (currentRoute !== "/") {
      homeOption = (
        <Link
          to="/"
          className="menuOption"
          as="a"
          style={{ textDecoration: "none" }}
        >
          <li data-text="Home">Home</li>
        </Link>
      );
    }

    if (currentRoute !== "/about") {
      aboutOption = (
        <Link
          to="/about"
          className="menuOption"
          as="button"
          style={{ textDecoration: "none" }}
        >
          <li data-text="About">About</li>
        </Link>
      );
    }

    if (currentRoute !== "/photos") {
      photosOption = (
        <Link
          to="/photos"
          className="menuOption"
          as="button"
          style={{ textDecoration: "none" }}
        >
          <li data-text="Photos">Photos</li>
        </Link>
      );
    }

    return (
      <div className="hamburger">
        <button className="menu-toggle" />
        <nav className="navigation">
          <ul className="menu">
            {/* <Link
              to="/"
              className="menuOption"
              as="a"
              style={{ textDecoration: "none" }}
            >
              <li data-text="Home">Home</li>
            </Link> */}
            {homeOption}
            {aboutOption}
            {photosOption}
            <li data-text="Demos">Demos</li>
          </ul>
        </nav>
      </div>
    );
  }
}
