import React, { Component } from "react";

import "./NavBar.css";
import "./Photos.css";

import NavBar from "./NavBar";
import SinglePhoto from "./SinglePhoto";

export default class Photos extends Component {
  render() {
    let manyPhotos = [];

    for (let i = 1; i < 27; i++) {
      let oneSinglePhoto = (
        <SinglePhoto
          photoURL={require(`../img/photosGallery/No${i}.jpeg`)}
          key={i}
        />
      );

      manyPhotos.push(oneSinglePhoto);
    }

    // const oneSinglePhoto = (
    //   <SinglePhoto photoURL={require("../img/photosGallery/No1.jpeg")} />
    // );

    return (
      <div className="Photos navController">
        <NavBar />
        <div className="photosContainer containerController">
          <div className="photosWrapper">
            <ul className="grid">
              {/* {oneSinglePhoto}
              {oneSinglePhoto}
              {oneSinglePhoto}
              {oneSinglePhoto} */}
              {manyPhotos}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
