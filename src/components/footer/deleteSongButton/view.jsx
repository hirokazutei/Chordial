import React from "react";

import { PALETTE } from "../../../constants/palette";

const style = {
  DeleteSongButton: {
    backgroundColor: PALETTE.greyD,
    border: "none",
    height: "30px",
    borderRadius: "5px",
    color: PALETTE.greyA,
    margin: "0 20px 0 20px"
  }
};

export const DeleteSongButtonView = props => {
  return (
    <button
      style={style.DeleteSongButton}
      className="DeleteSongButton"
      onClick={props.deleteSong}
    >
      Delete Song
    </button>
  );
};
