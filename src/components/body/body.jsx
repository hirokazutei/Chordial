import React, { Component } from "react";
import { connect } from "react-redux";
import ChordsDisplay from "./chords-display";
import AddNewSection from "./add-new-section";
import SongInfo from "./songInfo/index"

class Body extends Component {
  state = {};
  render() {
    return (
      <div className="body">
       <SongInfo />
        {this.props.song.currentSong.sections.map(section => (
          <ChordsDisplay
            onDelete={this.handleDelete}
            sectionID={section.id}
            sectionIndex={this.props.song.currentSong.sections.indexOf(section)}
            key={section.id}
          />
        ))}
        <AddNewSection />
        <div className="Break" />
      </div>
    );
  }
}
const mapStateToProps = state => ({ song: state.song });

export default connect(mapStateToProps)(Body);
