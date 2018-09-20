import React, { Component } from "react";

import ChordImage from "./chord-image";
import DeleteChordButton from "./delete-chord-button";
import ChordDropdown from "./chord-dropdown";
import { connect } from "react-redux";

class ChordsDisplay extends Component {
  empty_message = () => {
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
            <ChordImage chordKey={chord.chordKey} />
            <DeleteChordButton chordId={chord.id} />
            <ChordDropdown chordID={chord.id} chord={chord.chordKey} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  id: state.id,
  chords: state.chords
});

export default connect(mapStateToProps)(ChordsDisplay);
