import React, { Component } from "react";
import { connect } from "react-redux";

import actionTypes from "../../../../logic/song/actionTypes";

import { KEYS } from "../../../../constants/keys";

import { ChordView } from "./view";

class SongInfo extends Component {
  determineTitle = chord => {
    if (chord === "None") {
      return "Select Key";
    } else {
      return chord;
    }
  };

  obtainImage = () => {
    let chordImageSource = require(`../../../../chords/None.png`);
    if (KEYS.includes(this.props.chordKey)) {
      chordImageSource = require(`../../../../chords/${
        this.props.chordKey
      }.png`);
    }
    return chordImageSource;
  };

  deleteChord = chordID => {
    this.props.dispatch({ type: actionTypes.DELETE_CHORD, chordID: chordID });
  };

  render() {
    return (
      <ChordView
        chordImage={this.obtainImage()}
        keys={KEYS}
        chordID={this.props.chordID}
        chord={this.props.chordKey}
        deleteChord={() => this.deleteChord(this.props.chordID)}
      />
    );
  }
}

const mapStateToProps = state => ({ song: state.song });

export default connect(mapStateToProps)(SongInfo);
