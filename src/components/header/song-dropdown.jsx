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
  handleDropdown = () => {
      if (this.props.savedSongs) {
          console.log(this.props.savedSongs)
         return (this.props.savedSongs.map(song => (
            <a key={song.title} onClick={() => this.handleSong(song)}>
              {song.title}
            </a>)))
      } else {
          return <a key={-1}>Add Song</a>
      }
  }
  render() {
    return (
      <div className="dropdown">
        <button id="Songs" title="Songs" className="dropbtn">
          <Glyphicon glyph="glyphicon glyphicon-music" />
        </button>
        <div className="dropdown-content">
          {this.handleDropdown()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savedSongs: state.savedSongs
});

export default connect(mapStateToProps)(SongDropdown);
