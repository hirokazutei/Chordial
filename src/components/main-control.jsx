import React, { Component } from "react";

// Component Imports
//import Textbox from "./textbox";
//import ConvertAllChords from "./convert-all-chords";
import AddNewChord from "./add-new-chord";
import ToneButton from "./tone-button";

class MainControl extends Component {
  render() {
    return (
      <div className="MainControl">
        <div className="Buttons">
          <div>
            <AddNewChord className="AddNewChord" />
            <ToneButton />
          </div>
        </div>
      </div>
    );
  }
}

// Removed <ConvertAllChords>
/*
<div>
            <ConvertAllChords />
          </div>
*/
// Removed textbox
/*
<div className="Textbox">
<Textbox />
</div>
*/
export default MainControl;
