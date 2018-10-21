import React from "react";

import { Glyphicon } from "react-bootstrap";
import { PALETTE } from "../../../constants/palette";

const style = {
  toneButtonsDiv: {
    width: 100,
    margin: 0,
    padding: 0,
    top: 100
  },
  toneButtonUp: {
    backgroundColor: PALETTE.greyD,
    height: "30px",
    borderRadius: "5px 0 0 5px",
    color: PALETTE.greyA,
    margin: "0 0 0 20px"
  },
  toneButtonDown: {
    backgroundColor: PALETTE.greyD,
    height: "30px",
    borderRadius: "0 5px 5px 0",
    color: PALETTE.greyA,
    margin: "0 20px 0 0"
  }
};

export const ToneButtonView = props => {
  return (
    <div style={style.toneButtonsDiv}>
      <button onClick={props.toneUp} style={style.toneButtonUp}>
        <Glyphicon glyph="glyphicon glyphicon-chevron-up" />
      </button>
      <button onClick={props.toneDown} style={style.toneButtonDown}>
        <Glyphicon glyph="glyphicon glyphicon-chevron-down" />
      </button>
    </div>
  );
};
