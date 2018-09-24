import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
// Component Inputs
import Body from "./components/body/body";
import MainControl from "./components/footer/main-control";
import NavBar from "./components/header/nav-bar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Body />
        <MainControl />
      </div>
    );
  }
}

export default App;
