import React, { Component } from "react";
import { connect } from "react-redux";

import actionTypes from "../../../logic/song/actionTypes";
import { SongDropdownView } from "./view";

class SongDropdown extends Component {
  changeSong = song => {
    this.props.dispatch({
      type: actionTypes.CHANGE_SONG,
      song: song
    });
  };

  render() {
    return (
      <SongDropdownView
        savedSongs={this.props.savedSongs}
        changeSong={this.changeSong}
      />
    );
  }
}

const mapStateToProps = state => ({
  savedSongs: state.song.savedSongs
});

export default connect(mapStateToProps)(SongDropdown);
