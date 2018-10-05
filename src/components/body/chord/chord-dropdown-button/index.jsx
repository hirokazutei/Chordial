import React, { Component } from "react";
import { ChordDropdownButtonView } from "./view";
import { connect } from "react-redux";
import actionTypes from "../../../../logic/song/actionTypes";

const KEYS = require("../../../../static/constants");

class ChordDropdownButton extends Component {
  changeChord = (id, newKey) => {
    this.props.dispatch({ type: "CHORDCHANGE", id: id, newKey: newKey });
  };

  render() {
    console.log(this.props.chord);
    return (
      <ChordDropdownButtonView
        title={this.props.chord === "None" ? "Select Key" : this.props.chord}
        key={this.props.chordID}
        chordID={`chord-dropdown-button-${this.props.chordID}`}
      />
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ChordDropdownButton);
