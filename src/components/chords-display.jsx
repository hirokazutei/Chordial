import React, { Component } from "react";

import Chord from "./chord-image";
import DeleteChordButton from "./delete-chord-button";
import ChordDropdown from "./chord-dropdown";

class ChordsDisplay extends Component {
  empty_message = () => {
    console.log(this.props.chords.length);
    if (!this.props.chords.length) {
      return <h2>Add Chords!</h2>;
    }
  };
  render() {
    return (
      <div className="ChordsDisplay">
        {this.empty_message()}
        {this.props.chords.map(chord => (
          <div key={chord.id} className="Chord">
            <Chord chordKey={chord.chordKey} />
            <DeleteChordButton
              chordId={chord.id}
              onDelete={this.props.onDelete}
            />
            <ChordDropdown id={chord.id} onChange={this.props.onChange} />
          </div>
        ))}
      </div>
    );
  }
}

export default ChordsDisplay;
