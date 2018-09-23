import React, { Component } from "react";
import { connect } from "react-redux";

import ChordImage from "./chord-image";
import DeleteChordButton from "./delete-chord-button";
import ChordDropdown from "./chord-dropdown";
import AddNewChord from "./add-new-chord";
import SectionTitle from "./section-title";
import DeleteSectionButton from "./delete-section-button"

class ChordsDisplay extends Component {
  empty_message = () => {
    if (!this.props.song.sections.length) {
      return <h2>Add Chords!</h2>;
    } else {
       return (this.props.song.sections[this.props.sectionIndex].chords.map(chord => (
        <div key={chord.id} className="Chord">
          <ChordImage chordKey={chord.chordKey} />
          <DeleteChordButton chordId={chord.id} />
          <ChordDropdown chordID={chord.id} chord={chord.chordKey} />
        </div>
      ))) 
    }
  };
  render() {
    return (
      <div>
        <SectionTitle sectionID={this.props.sectionID} sectionIndex={this.props.sectionIndex} />
        <div className="ChordsDisplay">
          {this.empty_message()}
          <AddNewChord
            className="AddNewChord"
            sectionID={this.props.sectionID}
          />
        </div>
          <DeleteSectionButton className="DeleteSectionButton" sectionID={this.props.sectionID}/>
      </div>
    );
  }
}

// Remvoe Add Chord When enough chord

const mapStateToProps = state => ({
  song: state.song
});

export default connect(mapStateToProps)(ChordsDisplay);
