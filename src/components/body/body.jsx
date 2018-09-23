import React, { Component } from "react";
import { connect } from "react-redux";
import ChordsDisplay from "./chords-display";
import AddNewSection from "./add-new-section";
import SongTitle from "./song-title"
import SongArtist from "./song-artist";

class Body extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="SongInfo">
            <SongTitle />
            <SongArtist/>
        </div>
        {this.props.song.sections.map(section => (
          <ChordsDisplay
            onDelete={this.handleDelete}
            sectionID={section.id}
            sectionIndex={this.props.song.sections.indexOf(section)}
            key={section.id}
          />
        ))}
        <AddNewSection />
      </div>
    );
  }
}
const mapStateToProps = state => ({ song: state.song });

export default connect(mapStateToProps)(Body);
