import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Hamburger extends Component {
  render() {
    // Plan A

    // let homeOption;
    // let aboutOption;
    // let photosOption;
    // let portfolioOption;
    // const currentRoute = window.location.pathname;

    // // console.log(currentRoute);
    // // console.log(this.props.location);

    // if (currentRoute === "/") {
    //   homeOption = (
    //     <Link
    //       to="/"
    //       className="menuOption"
    //       as="a"
    //       style={{ textDecoration: "none" }}
    //     >
    //       <li data-text="Home">Home</li>
    //     </Link>
    //   );
    // }

    // if (currentRoute === "/") {
    //   aboutOption = (
    //     <Link
    //       to="/about"
    //       className="menuOption"
    //       as="button"
    //       style={{ textDecoration: "none" }}
    //     >
    //       <li data-text="About">About</li>
    //     </Link>
    //   );
    // }

    // if (currentRoute === "/") {
    //   photosOption = (
    //     <Link
    //       to="/photos"
    //       className="menuOption"
    //       as="button"
    //       style={{ textDecoration: "none" }}
    //     >
    //       <li data-text="Photos">Photos</li>
    //     </Link>
    //   );
    // }

    // if (currentRoute === "/") {
    //   portfolioOption = (
    //     <Link
    //       to="/portfolio"
    //       className="menuOption"
    //       as="button"
    //       style={{ textDecoration: "none" }}
    //     >
    //       <li data-text="Portfolio">Portfolio</li>
    //     </Link>
    //   );
    // }

    // Plan B

    const homeOption = (
      <a id="home" className="menu-item" href="#/">
        <li data-text="Home">Home</li>
      </a>
    );

    const aboutOption = (
      <a id="about" className="menu-item" href="#/about">
        <li data-text="About">About</li>
      </a>
    );

    const photosOption = (
      <a id="photos" className="menu-item" href="#/photos">
        <li data-text="Photos">Photos</li>
      </a>
    );

    const portfolioOption = (
      <a id="portfolio" className="menu-item" href="#/portfolio">
        <li data-text="Portfolio">Portfolio</li>
      </a>
    );

    return (
      <div className="hamburger">
        <button className="menu-toggle" />
        <nav className="navigation">
          <ul className="menu">
            {homeOption}
            {aboutOption}
            {photosOption ? photosOption : <li>haha</li>}
            {portfolioOption}
          </ul>
        </nav>
      </div>
    );
  }
}
