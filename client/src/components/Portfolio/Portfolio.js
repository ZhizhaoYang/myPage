import React, { Component } from "react";
import { Layout, Icon } from "antd";
import "antd/lib/icon/style";
import Swiper from "react-id-swiper";
// Need to add Pagination, Navigation modules
import { Pagination, Navigation } from "swiper/dist/js/swiper.esm";

import NavBar2 from "../NavBar2/NavBar2";
import Site from "./Site";

import "./Portfolio.css";

// class CustomSlide extends Component {
//   render() {
//     // const { index, ...props } = this.props;
//     return <Site />;
//   }
// }

class Portfolio extends Component {
  render() {
    const params = {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true
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
                <Swiper {...params}>
                  <div>
                    <Site />
                  </div>
                  <div>
                    <Site />
                  </div>
                  <div>
                    <Site />
                  </div>
                  <div>
                    <Site />
                  </div>
                  <div>
                    <Site />
                  </div>
                </Swiper>
              </Content>
            </main>
          </Layout>
        </div>
      </div>
    );
  }
}

export default Portfolio;
