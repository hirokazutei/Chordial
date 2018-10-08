import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";

import actionTypes from "../../../logic/song/actionTypes";
import { ToneButtonView } from "./view";

class ToneButton extends Component {
  toneUp = () => {
    let song = { ...this.props.song.currentSong };
    for (let section of song.sections) {
      for (let chord of section.chords) {
        if (chord.chordKey === "None") {
          chord.chordKey = "None";
        } else if (chord.chordKey.includes("b")) {
          chord.chordKey = chord.chordKey.replace("b", "");
        } else if (chord.chordKey.includes("s")) {
          switch (chord.chordKey[0]) {
            case "C":
              chord.chordKey = "Db" + chord.chordKey.slice(2);
              break;
            case "F":
              chord.chordKey = "G" + chord.chordKey.slice(2);
              break;
            case "G":
              chord.chordKey = "Ab" + chord.chordKey.slice(2);
              break;
            default:
              break;
          }
        } else {
          switch (chord.chordKey[0]) {
            case "A":
              chord.chordKey = "Bb" + chord.chordKey.slice(1);
              break;
            case "B":
              chord.chordKey = "C" + chord.chordKey.slice(1);
              break;
            case "C":
              chord.chordKey = "Cs" + chord.chordKey.slice(1);
              break;
            case "D":
              chord.chordKey = "Eb" + chord.chordKey.slice(1);
              break;
            case "E":
              chord.chordKey = "F" + chord.chordKey.slice(1);
              break;
            case "F":
              chord.chordKey = "Fs" + chord.chordKey.slice(1);
              break;
            case "G":
              chord.chordKey = "Gs" + chord.chordKey.slice(1);
              break;
            default:
              break;
          }
        }
      }
    }
    this.props.dispatch({ type: actionTypes.TONE_UP, song: song });
  };

  toneDown = () => {
    let song = { ...this.props.song.currentSong };
    for (let section of song.sections) {
      for (let chord of section.chords) {
        if (chord.chordKey === "None") {
          chord.chordKey = "None";
        } else if (chord.chordKey.includes("s")) {
          chord.chordKey = chord.chordKey.replace("s", "");
        } else if (chord.chordKey.includes("b")) {
          switch (chord.chordKey[0]) {
            case "A":
              chord.chordKey = "Gs" + chord.chordKey.slice(2);
              break;
            case "B":
              chord.chordKey = "A" + chord.chordKey.slice(2);
              break;
            case "D":
              chord.chordKey = "Cs" + chord.chordKey.slice(2);
              break;
            case "E":
              chord.chordKey = "D" + chord.chordKey.slice(2);
              break;
            default:
              break;
          }
        } else {
          switch (chord.chordKey[0]) {
            case "A":
              chord.chordKey = "Ab" + chord.chordKey.slice(1);
              break;
            case "B":
              chord.chordKey = "Bb" + chord.chordKey.slice(1);
              break;
            case "C":
              chord.chordKey = "B" + chord.chordKey.slice(1);
              break;
            case "D":
              chord.chordKey = "Db" + chord.chordKey.slice(1);
              break;
            case "E":
              chord.chordKey = "Eb" + chord.chordKey.slice(1);
              break;
            case "F":
              chord.chordKey = "E" + chord.chordKey.slice(1);
              break;
            case "G":
              chord.chordKey = "Fs" + chord.chordKey.slice(1);
              break;
            default:
              break;
          }
        }
      }
    }
    this.props.dispatch({ type: actionTypes.TONE_DOWN, song: song });
  };

  render() {
    return <ToneButtonView toneUp={this.toneUp} toneDown={this.toneDown} />;
  }
}
const mapStateToProps = state => ({
  song: state.song
});

export default connect(mapStateToProps)(ToneButton);
