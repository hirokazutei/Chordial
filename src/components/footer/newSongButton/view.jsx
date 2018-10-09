import React, { Component } from "react";

import { PALETTE } from "../../../constants/palette";

const style = {};

export const NewSongButtonView = props => {
  return (
    <button className="NewSongButton" onClick={props.addNewSong}>
      New Song
    </button>
  );
};
