import React, { Component } from "react";
import { PALETTE } from "../../../../../constants/palette";
import { Glyphicon } from "react-bootstrap";

const style = {
  dropdownContent: {
    display: "none",
    position: "absolute",
    right: "0px",
    backgroundColor: PALETTE.greyC,
    minWidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
    zIndex: 1
  }
};

export function ChordDropdownContentView(props) {
  return (
    <a
      key={props.index}
      onClick={props.changeChord}
      active={props.active}
      style={style.dropdownContent}
    >
      {props.chord}
    </a>
  );
}
