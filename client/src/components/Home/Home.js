import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./Home.css";

import aboutBg from "../../img/about-bg.jpg";
import demosBg from "../../img/demos-bg.jpg";
import photosBg from "../../img/photos-bg.jpg";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgImage: ""
    };
  }

  mouseEnter = image => {
    this.setState({
      bgImage: image
    });
  };

  mouseLeave = () => {
    this.setState({
      bgImage: ""
    });
  };

  render() {
    let bgImage = this.state.bgImage;
    let bgStyle = {
      backgroundImage: `url(${bgImage})`
    };

    return (
      <div className="homePage" style={bgStyle}>
        <Helmet>
          <title>Home | Eric Yang | Front-End Developer</title>
        </Helmet>
        {/* container for the grid system */}
        <div className="container">
          {/* section 1 -- The Introduction  */}
          <div className="section">
            <p>
              I'm Eric Yang
              <br />
              Front End Developer
              <br />A Big Programming Fan
            </p>
          </div>
          {/* section 2 -- Logo */}
          <div className="section">
            {/* <figure> */}
            <img
              id="logo"
              src={require("../../img/myLogo.png")}
              alt="EricYang"
            />
            {/* </figure> */}
          </div>
          {/* section 3 -- Links to other Routes */}
          <div className="section">
            <Link
              to="/about"
              className="links linkAbout"
              onMouseEnter={() => this.mouseEnter(aboutBg)}
              onMouseLeave={this.mouseLeave}
            >
              About
            </Link>
            <Link
              to="/photos"
              className="links linkPhotos"
              onMouseEnter={() => this.mouseEnter(photosBg)}
              onMouseLeave={this.mouseLeave}
            >
              Photos
            </Link>
            <Link
              to="/portfolio"
              className="links linkPortfolio"
              onMouseEnter={() => this.mouseEnter(demosBg)}
              onMouseLeave={this.mouseLeave}
            >
              Portfolio
            </Link>
          </div>
          {/* section 4 -- Icons for social links */}
          <div className="section">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <a href="mailto:ericyang654@gmail.com">
              <i className="fas fa-envelope" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook" />
            </a>
            <a
              href="https://www.snapchat.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-snapchat" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
