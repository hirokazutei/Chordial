import React, { Component } from "react";

import { PALETTE } from "../../../../constants/palette";
import { Glyphicon } from "react-bootstrap";

const style = {
  addNewChordButton: {
    marginLeft: "auto",
    marginRight: "auto",
    height: "150px",
    maxWidth: "100px",
    float: "right",
    color: PALETTE.greyB,
    background: PALETTE.orangeLight,
    border: "none"
  }
};

export function AddNewChordView(props) {
  return (
    <button style={style.addNewChordButton} onClick={props.addNewChord}>
      Add Chord <br />
      <Glyphicon glyph="glyphicon glyphicon-plus" />
    </button>
  );
}
