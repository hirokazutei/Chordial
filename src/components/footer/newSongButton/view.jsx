import React, { Component } from "react";

import { PALETTE } from "../../../constants/palette";

const style = {
  NewSongButton: {
    backgroundColor: PALETTE.orange,
    border: "none",
    height: "68px",
    borderRadius: "5px",
    color: PALETTE.greyA,
    margin: "0 20px 0 20px"
  }
};

export const NewSongButtonView = props => {
  return (
    <button
      style={style.NewSongButton}
      className="NewSongButton"
      onClick={props.addNewSong}
    >
      New Song
    </button>
  );
};
