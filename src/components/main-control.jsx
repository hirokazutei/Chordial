import React, { Component } from "react";
// Component Imports

import Textbox from "./textbox";
import ConvertAllChords from "./convert-all-chords";
import AddNewChord from "./add-new-chord";
import ToneButton from "./tone-button";

class MainControl extends Component {
  state = {};
  render() {
    return (
      <div className="MainControl">
        <div className="Textbox">
          <Textbox />
        </div>
        <div className="Buttons">
          <div>
            <AddNewChord onAdd={this.props.onAdd} className="m-10" />
          </div>
          <div>
            <ConvertAllChords />
          </div>
          <div>
            <ToneButton
              onToneUp={this.props.onToneUp}
              onToneDown={this.props.onToneDown}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default MainControl;
