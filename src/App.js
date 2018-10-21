import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
// Component Inputs
import Body from "./components/body/index";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import ChangeChordModal from "./components/global/changeChordModal/index";
import CloseModal from "./components/global/closeModal/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
        <CloseModal />
        <ChangeChordModal />
      </div>
    );
  }
}

export default App;
