import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
// Component Inputs
import ChordsDisplay from "./components/chords-display";
import MainControl from "./components/main-control";
import NavBar from "./components/nav-bar";
import * as firebase from "firebase";
import fire from "./config/Fire";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar onSong={this.handleSong} />
        <ChordsDisplay onDelete={this.handleDelete} />
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
