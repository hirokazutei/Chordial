import React, { Component } from "react";
import { connect } from "react-redux";
import { Glyphicon } from "react-bootstrap";

class SongDropdown extends Component {
  handleSong = song => {
    const chords = [];
    for (let i = 0; i < song.chords.length; i++) {
      chords.push({ id: i + this.props.id, chordKey: song.chords[i] });
    }
    this.props.dispatch({
      type: "SONGCHANGE",
      songChords: chords,
      addID: chords.length + this.props.id
    });
  };
  render() {
    return (
      <div className="dropdown">
        <button id="Songs" title="Songs" className="dropbtn">
          {" "}
          <Glyphicon glyph="glyphicon glyphicon-music" />
        </button>
        <div className="dropdown-content">
          {this.props.songs.map(song => (
            <a
              className="Hey"
              key={song.name}
              onClick={() => this.handleSong(song)}
            >
              {song.name}
            </a>
          ))}
        </div>
      </div>
    );
  }
  determineTitle = () => {
    if (this.state.key === "None") {
      return "Select Key";
    } else {
      return this.state.key;
    }
  };
}

const mapStateToProps = state => ({
  id: state.id,
  chords: state.chords,
  songs: state.songs
});

export default connect(mapStateToProps)(SongDropdown);
