import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";
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

class ChordDropdown extends Component {
  chords = this.props.chords;
  id = this.props.id;

  changeActive = (i, key) => {
    this.props.onChange(this.id, key);
  };

  render() {
    return (
      <DropdownButton
        title={this.determineTitle()}
        key={this.id}
        id={`dropdown-basic-${this.id}`}
        bsStyle="info"
        className="DropDownButton"
      >
        {KEYS.map(this.renderDropdown)}
      </DropdownButton>
    );
  }
  renderDropdown = (chordKey, i) => {
    if (this.chords[this.id].chordKey === chordKey) {
      return (
        <MenuItem
          key={i}
          active
          onSelect={() => this.changeActive(i, chordKey)}
        >
          {chordKey}
        </MenuItem>
      );
    }
    return (
      <MenuItem key={i} onSelect={() => this.changeActive(i, chordKey)}>
        {chordKey}
      </MenuItem>
    );
  };
  determineTitle = () => {
    if (this.chords[this.id].chordKey === "None") {
      return "Select Key";
    } else {
      return this.chords[this.id].chordKey;
    }
  };
}

export default ChordDropdown;
