import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePageContainer from "./components/homepage/homepageContainer";
import NavbarContainer from "./components/navbar/navbarContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePageContainer />
        <NavbarContainer />
      </div>
    );
  }
}

export default App;
