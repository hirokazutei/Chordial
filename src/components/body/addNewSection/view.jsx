import React from "react";
import { PALETTE } from "../../../constants/palette";
import Radium from "radium";

const style = {
  addNewSection: {
    width: "90%",
    color: PALETTE.greyD,
    backgroundColor: PALETTE.greyB,
    border: "none",
    height: "50px",
    margin: "10px 0 30px 0",
    ":hover": {
      backgroundColor: PALETTE.greyC
    }
  }
};

let AddNewSectionView = props => {
  return (
    <button
      kind="addNewSection"
      style={style.addNewSection}
      onClick={props.addNewSection}
    >
      ADD NEW SECTION
    </button>
  );
};

export default (AddNewSectionView = Radium(AddNewSectionView));
