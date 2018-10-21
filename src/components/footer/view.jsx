import React from "react";

import { PALETTE } from "../../constants/palette";
// Component Imports
import ToneButton from "./toneButton/index";
import SaveSongButton from "./saveSongButton/index";
import NewSongButton from "./newSongButton/index";
import DeleteSongButton from "./deleteSongButton/index";

const style = {
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "50px",
    background: PALETTE.greyB,
    padding: 0,
    margin: 0,
    right: 0,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

export const FooterView = props => {
  return (
    <footer style={style.footer}>
      <ToneButton />
      <SaveSongButton />
      <NewSongButton />
      <DeleteSongButton />
    </footer>
  );
};
