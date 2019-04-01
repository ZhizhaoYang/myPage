import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Hamburger extends Component {
  render() {
    let homeOption;
    let aboutOption;
    let photosOption;
    let portfolioOption;
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

    if (currentRoute !== "/portfolio") {
      portfolioOption = (
        <Link
          to="/portfolio"
          className="menuOption"
          as="button"
          style={{ textDecoration: "none" }}
        >
          <li data-text="Portfolio">Portfolio</li>
        </Link>
      );
    }

    return (
      <div className="hamburger">
        <button className="menu-toggle" />
        <nav className="navigation">
          <ul className="menu">
            {homeOption}
            {aboutOption}
            {photosOption}
            {portfolioOption}
          </ul>
        </nav>
      </div>
    );
  }
}
