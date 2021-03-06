import React, { Component } from "react";
import { PALETTE } from "../../../../../constants/palette";
import { Glyphicon } from "react-bootstrap";

const style = {
  chordDropdown: {
    position: "relative",
    display: "inline-block"
  },
  chordDropDownButton: {
    position: "relative",
    width: "70px",
    height: "30px",
    top: "115%",
    right: "135%",
    color: PALETTE.greyB,
    background: PALETTE.orange,
    border: "none"
  }
};

export const ChordDropdownButtonView = props => {
  return (
    <div style={style.chordDropdown}>
      <button
        title={props.title}
        key={props.chordID}
        id={`dropdown-basic-${props.chordID}`}
        style={style.chordDropDownButton}
        onClick={() => props.showChordsChange(props.chordID)}
      >
        {props.title}
      </button>
    </div>
  );
};
