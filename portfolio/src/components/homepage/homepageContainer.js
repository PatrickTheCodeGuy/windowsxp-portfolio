import React, { Component } from "react";
import "./homepage.css";
import image from "./windows-xp.jpg";

class HomePageContainer extends Component {
  render() {
    return (
      <div className="Homepage-container">
        <img className="image" src={image} />
      </div>
    );
  }
}

export default HomePageContainer;
