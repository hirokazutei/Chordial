import React from "react";

import { PALETTE } from "../../../constants/palette";

const style = {
  SaveSongButton: {
    backgroundColor: PALETTE.orangeLight,
    border: "none",
    height: "30px",
    borderRadius: "5px",
    color: PALETTE.greyA,
    margin: "0 20px 0 20px"
  }
};

export const SaveSongButtonView = props => {
  return (
    <button style={style.SaveSongButton} onClick={props.saveSong}>
      {props.saveOrUpdate}
    </button>
  );
};
