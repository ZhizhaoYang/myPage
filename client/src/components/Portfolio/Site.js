import React, { Component } from "react";

import "./Site.css";
// import Logo1_Shiweitian from "../../img/portfolio/portfolio-logo/ShiweitianLogo.jpg";

class Site extends Component {
  render() {
    let {
      imgLeftSect,
      brandLogo,
      description,
      imgWidth,
      imgHeight,
      liveSiteLink
    } = this.props;

    let styleLeftSect = {
      backgroundImage: `url(${imgLeftSect})`
    };

    return (
      <div className="Site">
        <span className="leftSection mainSection" style={styleLeftSect} />
        <span className="rightSection mainSection">
          <div className="rightContainer">
            <div className="rightContentWrapper">
              <img
                className="logo"
                src={brandLogo}
                style={{
                  width: imgWidth ? imgWidth : "100px",
                  height: imgHeight ? imgHeight : "113px"
                }}
              />
              {/* Underline */}
              <span
                style={{
                  width: "85%",
                  height: "auto",
                  display: "block",
                  backgroundColor: "white",
                  position: "absolute",
                  top: "44%",
                  borderTop: "#000 1px solid",
                  borderBottom: 0,
                  transform: "translateX(9.5%)"
                }}
              />
              <div className="textWrapper">
                <p className="work">
                  {description ? description : "Web Development"}
                </p>
                <div>
                  <a
                    className="liveSite"
                    href={liveSiteLink ? liveSiteLink : "#"}
                    target="_blank"
                  >
                    +View Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    );
  }
}

export default Site;
