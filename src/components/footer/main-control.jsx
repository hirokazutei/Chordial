import React, { Component } from "react";

// Component Imports
import ToneButton from "./tone-button";
import SaveSongButton from "./save-song-button";
import NewSongButton from "./new-song-button";
import DeleteSongButton from "./delete-song-button";

class MainControl extends Component {
  render() {
    return (
      <footer className="MainControl">
        <ToneButton />
        <SaveSongButton />
        <NewSongButton />
        <DeleteSongButton />
      </footer>
    );
  }
}

export default MainControl;
