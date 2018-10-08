import React from "react";
// Component Imports
import ToneButton from "./toneButton/index";
import SaveSongButton from "./saveSongButton/index";
import NewSongButton from "./newSongButton/index";
import DeleteSongButton from "./deleteSongButton/index";

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
