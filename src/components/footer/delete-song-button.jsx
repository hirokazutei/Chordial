import React, { Component } from "react";
import { connect } from "react-redux";

class DeleteSongButton extends Component {
  handleDelete = () => {
    let newSavedSongs = this.props.song.savedSongs.filter(
      songs => songs.id !== this.props.song.currentSong.id
    );

    this.props.dispatch({
      type: "DeleteSong",
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
    return (
      <button className="DeleteSongButton" onClick={() => this.handleDelete()}>
        Delete Song
      </button>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  song: state.song,
  firebase: state.firebase
});

export default connect(mapStateToProps)(DeleteSongButton);
