import React, { Component } from "react";
import { ChordView } from "./view";
import { connect } from "react-redux";
import actionTypes from "../../../logic/song/actionTypes";

const KEYS = require("../../../static/constants");

class SongInfo extends Component {
  determineTitle = chord => {
    if (chord === "None") {
      return "Select Key";
    } else {
      return chord;
    }
  };

  obtainImage = () => {
    let chordImageSource = require(`../../../chords/None.png`);
    if (KEYS.includes(this.props.chordKey)) {
      chordImageSource = require(`../../../chords/${this.props.chordKey}.png`);
    }
    return chordImageSource;
  };

  deleteChord = chordID => {
    this.props.dispatch({ type: "CHORDDELETE", chordID: chordID });
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
