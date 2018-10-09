import React from "react";

import { Glyphicon } from "react-bootstrap";
import { PALETTE } from "../../../constants/palette";

const style = {};

export const ToneButtonView = props => {
  return (
    <div>
      <button onClick={props.toneUp} className="UpToneButton">
        <Glyphicon glyph="glyphicon glyphicon-chevron-up" />
      </button>
      <button onClick={props.toneDown} className="UpToneButton">
        <Glyphicon glyph="glyphicon glyphicon-chevron-down" />
      </button>
    </div>
  );
};
