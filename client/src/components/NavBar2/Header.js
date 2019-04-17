import React, { Component } from "react";
import { scaleRotate as Menu } from "react-burger-menu";

import "./Header.css";
// import "../../../node_modules/react-burger-menu/dist/"

class NavBar_2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      side: "left"
    };
  }

  componentDidMount = () => {
    this.setState({ side: this.props.side });
  };

  render() {
    const side = this.state.side;
    let setRightSide = false;
    if (side === "right") {
      setRightSide = true;
    }

    return (
      <div className="NavBar_2">
        <div className="container">
          <span>Portfolio</span>
        </div>

        {/* <Menu
          className="hamburgerMenu"
          width={"30%"}
          right={setRightSide}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        >
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Menu> */}
      </div>
    );
  }
}

export default NavBar_2;
