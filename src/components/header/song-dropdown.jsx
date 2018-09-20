import React, { Component } from "react";
import { connect } from "react-redux";
import { Glyphicon } from "react-bootstrap";

class SongDropdown extends Component {
  handleSong = song => {
    this.props.dispatch({
      type: "SONGCHANGE",
      song: song
    });
  };
  render() {
    return (
      <div className="dropdown">
        <button id="Songs" title="Songs" className="dropbtn">
          <Glyphicon glyph="glyphicon glyphicon-music" />
        </button>
        <div className="dropdown-content">
          {this.props.savedSongs.map(song => (
            <a key={song.songName} onClick={() => this.handleSong(song)}>
              {song.songName}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savedSongs: state.savedSongs
});

export default connect(mapStateToProps)(SongDropdown);
