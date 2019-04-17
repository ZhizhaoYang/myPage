import React, { Component } from "react";
import { Helmet } from "react-helmet";

// import local components
import NavBar from "../NavBar/NavBar";

// import local css files
import "./About.css";
import "../NavBar/NavBar.css";

export default class About extends Component {
  render() {
    return (
      <div className="About navController">
        <Helmet>
          <title>About | Eric Yang | Front-End Developer</title>
        </Helmet>
        {/* Nav Bar (Header) */}
        <NavBar pageName="about" />

        {/* Main Part Container */}
        <div className="aboutContainer containerController">
          {/* ------------ Introduction Section ---------- */}
          <div className="intro part">
            <h1>Hi, Im </h1>
            <h1>Eric Yang</h1>
            <h5>
              A front end developer
              <br />A programming fan
            </h5>
            <p>
              I enjoy every aspect of building websites, from front end to back
              end development. My primary focus presently is on front end
              development but I love to explore new interesting techniques not
              just front end skills. I am constantly learning new techniques and
              frameworks in both Front End and Back End to prepare myself for
              becoming a Full Stack developer. As for the reason why programming
              attracts me, as you see, the Internet widly changing our real life
              every day and night, and technology is the sword.
            </p>
          </div>

          {/* ------------ Skills Section ---------- */}
          <div className="skills part">
            <h2>SKILLS</h2>
            <p>
              <b>FRONT END</b>
              <br />
              HTML5, CSS3, Javascript(ES6), jQuery, React, Redux, Sass,
              Responsive Design
            </p>
            <p>
              <b>UI LIBRARIES</b>
              <br />
              Bootstrap, Semantic UI, Antd, Material UI
            </p>
            <p>
              <b>BACK END</b>
              <br />
              Node.js, Express.js, MongoDB, MySQL, Ajax, Json, Restful API,
              Linux Command Lines
            </p>
            <p>
              <b>TOOLS</b>
              <br />
              Git, NPM, Webpack, Sublime, VS Code, Xcode, Eclipse, InteliJ,
              Postman
            </p>
            <p>
              <b>OTHER PROGRAMMING LANGUAGES</b>
              <br />
              Java, C++, PHP, Matlab
            </p>
            <p>
              <b>CLOUD/HOSTING</b>
              <br />
              AWS, HEROKU
            </p>
            <p>
              <b>LEARNED COURSES</b>
              <br />
              Data Structures, Algorithms, Unix/Linux, Assembly Language,
              Computer Network, Operating System, Theory of Computing and so on
            </p>
            <p>
              <b>LANGUAGES</b>
              <br />
              English, Mandarin, Cantonese
            </p>
          </div>
          <div className="contacts part">
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
