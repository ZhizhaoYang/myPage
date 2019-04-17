import React, { Component } from "react";
import { Layout, Icon } from "antd";
import "antd/lib/icon/style";
import Slider from "react-slick";

import NavBar2 from "../NavBar2/NavBar2";
import Site from "./Site";

import "./Portfolio.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../node_modules/slick-carousel/slick/slick.css";

const SampleNextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        // ...style,
        display: "block",
        background: "yellow",
        fontSize: "34px"
      }}
      onClick={onClick}
    />
  );
};

const leftArrow = () => {
  return <Icon type="left" />;
};
const prevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <Icon type="left" onClick={onClick} className={className}>
      Next
    </Icon>

    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "green" }}
    //   onClick={onClick}
    // />
  );
};

class CustomSlide extends Component {
  render() {
    // const { index, ...props } = this.props;
    return <Site />;
  }
}

class Portfolio extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 650,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      centerPadding: "100px",
      easing: "ease-in-out",
      swipeToSlide: true,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: prevArrow
    };

    const { Header, Content } = Layout;

    return (
      <div className="portfolio">
        <div id="outer-container">
          <Layout className="portLayout ">
            <Header className="portHeader">
              <NavBar2 />
            </Header>
            <main id="page-wrap">
              <Content className="portContent">
                <Slider {...settings}>
                  <CustomSlide />
                  <CustomSlide />
                  <CustomSlide />
                </Slider>
              </Content>
            </main>
          </Layout>
        </div>
      </div>
    );
  }
}

export default Portfolio;
