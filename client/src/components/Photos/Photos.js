import React, { Component } from "react";
import { Helmet } from "react-helmet";

import "../NavBar/NavBar.css";
import "./Photos.css";

import NavBar from "../NavBar/NavBar";
import SinglePhoto from "./SinglePhoto";

export default class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [
        { key: 1, author: "Mwabonje" },
        { key: 2, author: "Jaxson Bryden" },
        { key: 3, author: "Gustav Lundborg" },
        { key: 4, author: "Ulyana Tim" },
        { key: 5, author: "Brayden Law" },
        { key: 6, author: "Edu Carvalho" },
        { key: 7, author: "Vincent Gerbouin" },
        { key: 8, author: "Beayden Law" },
        { key: 9, author: "Rudolf Kirchner" },
        { key: 10, author: "Henry & Co" },
        { key: 11, author: "Jeswin Thomas" },
        { key: 12, author: "Vishnu R Nair" },
        { key: 13, author: "Oliver Sjostrom" },
        { key: 14, author: "Vikas Sawant" },
        { key: 15, author: "Alisha Mishra" },
        { key: 16, author: "Sebastain Palomino" },
        { key: 17, author: "Todd Trapani" },
        { key: 18, author: "Burst" },
        { key: 19, author: "Naveen Annam" },
        { key: 20, author: "Adhitya Andanu" },
        { key: 21, author: "Cameron Casey" },
        { key: 22, author: "eberhard grossgasteiger" },
        { key: 23, author: "tobias Bjorkli" },
        { key: 24, author: "Sebastian Ervi" },
        { key: 25, author: "Jonas Ferlin" },
        { key: 26, author: "Thgusstavo Santana" }
      ]
    };
  }

  render() {
    let manyPhotos = [];
    const len = this.state.photos.length;
    for (let i = 1; i <= len; i++) {
      const author = this.state.photos[i - 1].author;
      let oneSinglePhoto = (
        <SinglePhoto
          photoURL={require(`../../img/photosGallery/No${i}.jpeg`)}
          key={i}
          author={author}
        />
      );

      manyPhotos.push(oneSinglePhoto);
    }

    return (
      <div className="Photos navController">
        <Helmet>
          <title>Photos | Eric Yang | Front-End Developer</title>
        </Helmet>
        <NavBar pageName="photos" />
        <div className="photosContainer containerController">
          <div className="photosWrapper">
            <ul className="grid">
              {manyPhotos}
              <div className="fixEndPhoto" />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
