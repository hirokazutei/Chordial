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

  handleAdd = () => {
    this.props.dispatch({ type: "SongAdd" });
  };

  handleDropdown = () => {
    if (this.props.song.savedSongs.length > 0) {
      return this.props.song.savedSongs.map(song => (
        <a key={song.title} onClick={() => this.handleSong(song)}>
          {song.title}
        </a>
      ));
    } else {
      return (
        <a key={-1} onClick={() => this.handleAdd()}>
          Add Song
        </a>
      );
    }
  };
  render() {
    return (
      <div className="dropdown">
        <button id="Songs" title="Songs" className="dropbtn">
          <Glyphicon glyph="glyphicon glyphicon-music" />
        </button>
        <div className="dropdown-content">{this.handleDropdown()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  song: state.song
});

export default connect(mapStateToProps)(SongDropdown);
