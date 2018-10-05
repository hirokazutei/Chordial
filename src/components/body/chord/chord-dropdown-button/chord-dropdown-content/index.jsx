import React, { Component } from "react";
import { ChordDropdownContentView } from "./view";
import { connect } from "react-redux";
import actionTypes from "../../../../../logic/song/actionTypes";

const KEYS = require("../../../../../static/constants");

class ChordDropdownContent extends Component {
  renderDropdown = (chordKey, i) => {
    return (
      <ChordDropdownContentView
        active={this.props.chord === chordKey ? "active" : ""}
        changeChord={this.props.changeChord}
        index={i}
        chord={this.props.chord === chordKey ? this.props.chord : chordKey}
      />
    );
  };

  render() {
    return <div>{KEYS.map(this.renderDropdown)}</div>;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ChordDropdownContent);
