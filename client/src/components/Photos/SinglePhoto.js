import React, { Component } from "react";

import "./SinglePhoto.css";

export default class SinglePhoto extends Component {
  handleClick = e => {
    window.open(this.props.photoURL, "", "resizable,scrollbars,status,menubar");
  };

  render() {
    let photoURL = this.props.photoURL;
    const photoStyle = {
      backgroundImage: "url(" + photoURL + ")",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat"
    };

    const author = this.props.author;

    return (
      <li className="col-1" style={photoStyle} onClick={this.handleClick}>
        <span>
          Source from Pexels.com
          <br />
          by {author}
        </span>
      </li>
    );
  }
}
