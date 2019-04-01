import React, { Component } from "react";
import { Link } from "react-router-dom";

// import local components
import Hamburger from "./Hamburger";

// import external packets
import Headroom from "react-headroom";
import $ from "jquery";

export default class NavBar extends Component {
  componentDidMount = () => {
    $("button").on("click", function() {
      $(".navController").toggleClass("open");
      $(".containerController").toggle("display");
      $(".header").toggle("display");
    });

    var iScrollPos = 0;
    $(window).scroll("scroll", function() {
      var iCurScrollPos = $(this).scrollTop();
      if (iCurScrollPos > iScrollPos) {
        $(".menu-toggle").css({ display: "none" });
      } else {
        setTimeout(() => {
          $(".menu-toggle").css({
            display: "inline-block"
          });
        }, 300);
      }
      iScrollPos = iCurScrollPos;
    });
  };

  render() {
    return (
      <div className="Navbar">
        {/* ----------- Headroom Header & Hamburger Menu ---------- */}
        <Headroom style={{ height: "85px" }}>
          <div className="header">
            <h4 id="about">About</h4>
            <Link to="/">
              <img
                src={require("../../img/myLogo.png")}
                alt="ericYang"
                id="myLogo"
              />
            </Link>

            {/* an empty div tag below to balance the header section */}
            <div />
          </div>
        </Headroom>
        <Hamburger />
      </div>
    );
  }
}
