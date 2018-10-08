import React, { Component } from "react";
import { connect } from "react-redux";

import { SectionView } from "./view";

class Section extends Component {
  render() {
    return (
      <SectionView
        showChords={this.props.song.currentSong.sections.length}
        sectionID={this.props.sectionID}
        sectionIndex={this.props.sectionIndex}
        sections={this.props.song.currentSong.sections}
      />
    );
  }
}

const mapStateToProps = state => ({
  song: state.song
});

export default connect(mapStateToProps)(Section);
