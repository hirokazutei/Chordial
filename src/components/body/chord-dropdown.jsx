import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { connect } from "react-redux";

var KEYS = require("../../static/constants");

class ChordDropdown extends Component {
  handleChange = (id, newKey) => {
    this.props.dispatch({ type: "CHORDCHANGE", id: id, newKey: newKey });
  };

  render() {
    return (
      <DropdownButton
        title={this.determineTitle(this.props.chord)}
        key={this.props.chordID}
        id={`dropdown-basic-${this.props.chordID}`}
        bsStyle="info"
        className="DropDownButton"
      >
        {KEYS.map(this.renderDropdown)}
      </DropdownButton>
    );
  }

  renderDropdown = (chordKey, i) => {
    if (this.props.chord === chordKey) {
      return (
        <MenuItem
          key={i}
          active
          onSelect={() => this.handleChange(this.props.chordID, chordKey)}
        >
          {this.props.chord}
        </MenuItem>
      );
    } else {
      return (
        <MenuItem
          key={i}
          onSelect={() => this.handleChange(this.props.chordID, chordKey)}
        >
          {chordKey}
        </MenuItem>
      );
    }
  };

  determineTitle = chord => {
    if (chord === "None") {
      return "Select Key";
    } else {
      return chord;
    }
  };
}

const mapStateToProps = state => ({
  id: state.id,
  chords: state.chords
});

export default connect(mapStateToProps)(ChordDropdown);
