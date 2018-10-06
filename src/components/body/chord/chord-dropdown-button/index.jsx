import React, { Component } from "react";
import { ChordDropdownButtonView } from "./view";
import { connect } from "react-redux";
import actionTypes from "../../../../logic/song/actionTypes";

const KEYS = require("../../../../static/constants");

class ChordDropdownButton extends Component {
  changeChord = (id, newKey) => {
    this.props.dispatch({ type: "CHORDCHANGE", id: id, newKey: newKey });
  };

  showChordsChange = id => {
    this.props.dispatch({ type: "SHOWCHORDSCHANGE", id: id });
  };

  render() {
    return (
      <ChordDropdownButtonView
        title={this.props.chord === "None" ? "Select Key" : this.props.chord}
        key={`chord-dropdown-button-${this.props.chordID}`}
        chordID={this.props.chordID}
        chord={this.props.chord}
        changeChord={this.changeChord}
        showChordsChange={this.showChordsChange}
      />
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ChordDropdownButton);
