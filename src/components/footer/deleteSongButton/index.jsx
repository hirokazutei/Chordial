import React, { Component } from "react";
import { connect } from "react-redux";

import actionTypes from "../../../logic/song/actionTypes";
import { DeleteSongButtonView } from "./view";

class DeleteSongButton extends Component {
  deleteSong = () => {
    let newSavedSongs = this.props.song.savedSongs.filter(
      songs => songs.id !== this.props.song.currentSong.id
    );
    this.props.dispatch({
      type: actionTypes.DELETE_SONG,
      savedSongs: newSavedSongs
    });
    if (this.props.user.loggedin) {
      this.props.firebase.db
        .collection("UserSongs")
        .doc(this.props.user.user.uid)
        .set({
          data: newSavedSongs
        });
    }
    this.props.dispatch({ type: "Message", message: "Song Deleted" });
  };

  render() {
    return <DeleteSongButtonView deleteSong={this.deleteSong} />;
  }
}

const mapStateToProps = state => ({
  user: state.user,
  song: state.song,
  firebase: state.firebase
});

export default connect(mapStateToProps)(DeleteSongButton);
