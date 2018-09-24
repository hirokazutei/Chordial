import React, { Component } from "react";
import { connect } from "react-redux";

class SaveSongButton extends Component {
  handleSave = () => {
    this.props.dispatch({ type: "SaveSongState" });
    if (this.props.user.loggedin) {
      this.props.dispatch({
        type: "SaveSongDB",
        userID: this.props.user.user.uid
      });
    } else {
      this.props.dispatch({
        type: "Message",
        message:
          "You are not logged in.\nYour progress might dissapear if you exit or refresh the site."
      });
    }
  };

  buttonChange = () => {
    for (let savedSong of this.props.song.savedSongs) {
      if (this.props.song.currentSong.id === savedSong.id) {
        return (
          <button
            className="UpdateSongButton"
            onClick={() => this.handleSave()}
          >
            Update Song
          </button>
        );
      }
    }
    return (
      <button className="SaveSongButton" onClick={() => this.handleSave()}>
        Save Song
      </button>
    );
  };

  render() {
    return this.buttonChange();
  }
}

const mapStateToProps = state => ({
  user: state.user,
  song: state.song
});

export default connect(mapStateToProps)(SaveSongButton);
