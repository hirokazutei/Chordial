import React, { Component } from "react";

// Component Imports
import ToneButton from "./tone-button";
import SaveSongButton from "./save-song-button";

class MainControl extends Component {
  render() {
    return (
      <div className="MainControl">
        <div className="Buttons">
          <div>
            <ToneButton />
            <SaveSongButton />
          </div>
        </div>
      </div>
    );
  }
}

export default MainControl;
