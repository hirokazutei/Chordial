import React from "react";
import { Glyphicon } from "react-bootstrap";
import { PALETTE } from "../../../../constants/palette";

const style = {
  deleteSectionButton: {
    color: PALETTE.white,
    background: PALETTE.greyD,
    position: "relative",
    borderRadius: "20px",
    border: "None",
    width: "20px",
    height: "20px",
    bottom: "215px",
    left: "43.5%",
    alignItems: "center",
    padding: "1px 1px"
  }
};

export const DeleteSectionButtonView = props => {
  return (
    <button style={style.deleteSectionButton} onClick={props.deleteSection}>
      <Glyphicon glyph="glyphicon glyphicon-remove" />
    </button>
  );
};
