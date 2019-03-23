import React, { Component } from "react";

import "./SinglePhoto.css";

export default class SinglePhoto extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {
    window.open(this.props.photoURL, "", "resizable,scrollbars,status,menubar");
  };

  render() {
    let photoURL = this.props.photoURL;
    const photoStyle = {
      backgroundImage: "url(" + photoURL + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };
    return (
      <li className="col-1" style={photoStyle} onClick={this.handleClick} />
    );
  }
}
