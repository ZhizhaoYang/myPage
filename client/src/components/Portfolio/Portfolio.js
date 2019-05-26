import React, { Component } from "react";
import { Layout } from "antd";
import "antd/lib/icon/style";
import Swiper from "react-id-swiper";
// Need to add Pagination, Navigation modules
import { Pagination, Navigation } from "swiper/dist/js/swiper.esm";

import NavBar2 from "../NavBar2/NavBar2";
import Site from "./Site";

import "./Portfolio.css";

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
                    {/* Site: LoveFunArt */}
                    <Site
                      imgLeftSect={require("../../img/portfolio/portfolio-bg/LoveFunArt.jpg")}
                      brandLogo={require("../../img/portfolio/portfolio-logo/loveFunArtLogo.jpg")}
                      imgWidth="140px"
                      liveSiteLink="https://lovefunart.ca/"
                    />
                  </div>
                  {/* Site: Mandarin */}
                  <div>
                    <Site
                      imgLeftSect={require("../../img/portfolio/portfolio-bg/Shiweitian.jpg")}
                      brandLogo={require("../../img/portfolio/portfolio-logo/ShiweitianLogo.jpg")}
                      liveSiteLink="http://m2gobymandarin.com/"
                    />
                  </div>
                  {/* Site: leapFrog */}
                  <div>
                    <Site
                      imgLeftSect={require("../../img/portfolio/portfolio-bg/leapFrog.jpg")}
                      brandLogo={require("../../img/portfolio/portfolio-logo/leapFrogLogo.jpg")}
                      liveSiteLink="http://leapfrogcomms.ca/"
                      imgWidth="136px"
                    />
                  </div>
                  {/* Site: BridgeTheHeart */}
                  <div>
                    <Site
                      imgLeftSect={require("../../img/portfolio/portfolio-bg/BridgeHeart.jpg")}
                      brandLogo={require("../../img/portfolio/portfolio-logo/BridgeHeartLogo.jpg")}
                      liveSiteLink="http://bridgetheheart.org/"
                      imgWidth="148px"
                    />
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
