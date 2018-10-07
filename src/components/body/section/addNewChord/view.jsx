import React, { Component } from "react";
import { PALETTE } from "../../../../constants/palette";
import { Glyphicon } from "react-bootstrap";

const style = {};

export function AddNewChordView(props) {
  return (
    <button onClick={props.addNewChord}>
      Add Chord <br />
      <Glyphicon glyph="glyphicon glyphicon-plus" />
    </button>
  );
}
