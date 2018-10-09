import React from "react";

import { PALETTE } from "../../constants/palette";
// Component Imports
import ToneButton from "./toneButton/index";
import SaveSongButton from "./saveSongButton/index";
import NewSongButton from "./newSongButton/index";
import DeleteSongButton from "./deleteSongButton/index";

const style = {};

export const FooterView = props => {
  return (
    <footer className="MainControl">
      <ToneButton />
      <SaveSongButton />
      <NewSongButton />
      <DeleteSongButton />
    </footer>
  );
};
