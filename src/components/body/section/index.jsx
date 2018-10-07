import React, { Component } from "react";
import { connect } from "react-redux";

import Chord from "../chord/index";
import { SectionView } from "./view";

class Section extends Component {
  showChords = () => {
    if (!this.props.song.currentSong.sections.length) {
      return <h2>ADD CHORDS!</h2>;
    } else {
      return this.props.song.currentSong.sections[
        this.props.sectionIndex
      ].chords.map(chord => (
        <Chord key={chord.id} chordKey={chord.chordKey} chordID={chord.id} />
      ));
    }
  };

  render() {
    return (
      <SectionView
        showChords={this.showChords}
        sectionID={this.props.sectionID}
        sectionIndex={this.props.sectionIndex}
      />
    );
  }
}

const mapStateToProps = state => ({
  song: state.song
});

export default connect(mapStateToProps)(Section);
