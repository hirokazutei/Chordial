import React, { Component } from "react";
import { Image } from "react-bootstrap";

const KEYS = [
  "A",
  "A7",
  "Ab",
  "Am",
  "B",
  "B7",
  "Bb",
  "Bb7",
  "Bbm",
  "Bm",
  "C",
  "Csm",
  "C7",
  "Cm",
  "D",
  "D7",
  "Db",
  "Dm",
  "E",
  "E7",
  "Eb",
  "Eb7",
  "Em",
  "F",
  "Fs",
  "Fs7",
  "Fsm",
  "F7",
  "Fm",
  "G",
  "Gsm",
  "G7",
  "Gm",
  "None"
];

class Chord extends Component {
  render() {
    let chord_image = require(`../chords/None.png`);
    if (KEYS.includes(this.props.chordKey)) {
      chord_image = require(`../chords/${this.props.chordKey}.png`);
    }
    return (
      <Image src={chord_image} alt="" align="bottom" className="ChordImage" />
    );
  }
}

export default Chord;
