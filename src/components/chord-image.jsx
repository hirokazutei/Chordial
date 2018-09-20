import React, { Component } from "react";
import { Image } from "react-bootstrap";

const KEYS = require("../static/constants");

class ChordImage extends Component {
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

export default ChordImage;
