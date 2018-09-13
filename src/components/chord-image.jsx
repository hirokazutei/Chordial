import React, { Component } from "react";
import { Image } from "react-bootstrap";

class Chord extends Component {
  render() {
    let chord_image = require(`../chords/${this.props.chordKey}.png`);
    console.log(chord_image);
    return (
      <Image src={chord_image} alt="" align="bottom" className="ChordImage" />
    );
  }
}

export default Chord;
