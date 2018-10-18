import React, { Component } from "react";
import { connect } from "react-redux";

import songActionTypes from "../../../../../logic/song/actionTypes";
import componentActionTypes from "../../../../../logic/components/actionTypes";
import { KEYS } from "../../../../../constants/keys";

import { ChordDropdownButtonView } from "./view";

class ChordDropdownButton extends Component {
  changeChord = (id, newKey) => {
    this.props.dispatch({
      type: songActionTypes.CHANGE_CHORD_KEY,
      id: id,
      newKey: newKey
    });
  };

  showChordsChange = id => {
    this.props.dispatch({
      type: componentActionTypes.SHOW_CHORD_CHANGE,
      id: id
    });
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
