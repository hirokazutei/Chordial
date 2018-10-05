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
      <div className="dropdown">
        <button
          title={this.determineTitle(this.props.chord)}
          key={this.props.chordID}
          id={`dropdown-basic-${this.props.chordID}`}
          bsStyle="info"
          className="DropDownButton"
        >
          {this.determineTitle(this.props.chord)}
        </button>
        <div className="dropdown-content">{KEYS.map(this.renderDropdown)}</div>
      </div>
    );
  }

  renderDropdown = (chordKey, i) => {
    if (this.props.chord === chordKey) {
      return (
        <a
          key={i}
          active
          onClick={() => this.handleChange(this.props.chordID, chordKey)}
        >
          {this.props.chord}
        </a>
      );
    } else {
      return (
        <a
          key={i}
          onClick={() => this.handleChange(this.props.chordID, chordKey)}
        >
          {chordKey}
        </a>
      );
    }
  };
}
