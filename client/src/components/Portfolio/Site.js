import React, { Component } from "react";

import "./Site.css";

class Site extends Component {
  render() {
    const siteStyles = { margin: "10px" };

    return (
      <div className="Site">
        <span className="leftSection mainSection" />
        <span className="rightSection mainSection" />
      </div>
    );
  }
}

export default Site;
