import React, { Component } from "react";
// import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";

import "./About.css";
import $ from "jquery";

import Headroom from "react-headroom";

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    $("button").on("click", function() {
      $(".About").toggleClass("open");
      $(".aboutContainer").toggle("display");
      $(".header").toggle("display");
    });
  };

  render() {
    return (
      <div className="About">
        <Hamburger />
        <Headroom style={{ height: "74px" }}>
          <div className="header">
            {/* an empty div tag below to balance the header section */}
            <div />
            <img
              src={require("../img/myLogo.png")}
              alt="ericYang"
              id="myLogo"
            />
            <h4 id="about">About</h4>
          </div>
        </Headroom>

        <div className="aboutContainer">
          <div className="intro part">
            <h1>I'm </h1>
            <h1>Eric Yang</h1>
          </div>

          <div className="skills part">Skills</div>
          <div className="contacts part">Contacts</div>
        </div>
      </div>
    );
  }
}
