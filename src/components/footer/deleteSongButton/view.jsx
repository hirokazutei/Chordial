import React from "react";

import { PALETTE } from "../../../constants/palette";

const style = {};

export const DeleteSongButtonView = props => {
  return (
    <button className="DeleteSongButton" onClick={props.deleteSong}>
      Delete Song
    </button>
  );
};
