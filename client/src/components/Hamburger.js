import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Hamburger extends Component {
  render() {
    return (
      <div className="hamburger">
        <button class="menu-toggle" />
        <nav>
          <ul class="menu">
            <Link to="/" className="menuOption">
              <li data-text="Home">Home</li>
            </Link>
            <li data-text="About">About</li>
            <li data-text="Photos">Photos</li>
            <li data-text="Demos">Demos</li>
          </ul>
        </nav>
      </div>
    );
  }
}
