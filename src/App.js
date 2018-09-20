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
        <NavBar onSong={this.handleSong} />
        <Body />
        <MainControl
          onToneUp={this.handleToneUp}
          onToneDown={this.handleToneDown}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  id: state.id,
  chords: state.chords
});

export default connect(mapStateToProps)(App);
