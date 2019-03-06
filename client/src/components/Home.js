import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import aboutBg from "../img/about-bg.jpg";
import demosBg from "../img/demos-bg.jpg";
import photosBg from "../img/photos-bg.jpg";

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
        {/* container for the grid system */}
        <div className="container">
          {/* section 1 -- The Introduction  */}
          <section>
            <p>
              I'm Eric Yang
              <br />
              Front End Developer
              <br />A student in CS Program
            </p>
          </section>
          {/* section 2 -- Logo */}
          <section>
            <figure>
              <img
                id="logo"
                src={require("../img/myLogo.png")}
                alt="EricYang"
              />
            </figure>
          </section>
          {/* section 3 -- Links to other Routes */}
          <section>
            {/* <a
              href="/about"
              className="links linkAbout"
              onMouseEnter={() => this.mouseEnter(aboutBg)}
              onMouseLeave={this.mouseLeave}
            >
              About
            </a>
            <a
              href="#"
              className="links linkDemos"
              onMouseEnter={() => this.mouseEnter(demosBg)}
              onMouseLeave={this.mouseLeave}
            >
              Demos
            </a>
            <a
              href="#"
              className="links linkPhotos"
              onMouseEnter={() => this.mouseEnter(photosBg)}
              onMouseLeave={this.mouseLeave}
            >
              Photos
            </a> */}
            <Link
              to="/about"
              className="links linkAbout"
              onMouseEnter={() => this.mouseEnter(aboutBg)}
              onMouseLeave={this.mouseLeave}
            >
              About
            </Link>
            <Link
              to="/demos"
              className="links linkDemos"
              onMouseEnter={() => this.mouseEnter(demosBg)}
              onMouseLeave={this.mouseLeave}
            >
              Demos
            </Link>
            <Link
              to="#"
              className="links linkPhotos"
              onMouseEnter={() => this.mouseEnter(photosBg)}
              onMouseLeave={this.mouseLeave}
            >
              Photos
            </Link>
            {/* <a href="#" className="links">
              About
            </a>
            <a href="#" className="links">
              Workt
            </a>
            <a href="#" className="links">
              Photos
            </a> */}
          </section>
          {/* section 4 -- Icons for social links */}
          <section>
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
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
