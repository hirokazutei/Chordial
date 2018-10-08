import React, { Component } from "react";
import { connect } from "react-redux";

import actionTypes from "../../../logic/song/actionTypes";
import { SaveSongButtonView } from "./view";

class SaveSongButton extends Component {
  saveSong = () => {
    this.props.dispatch({ type: "SaveSongState" });
    if (this.props.user.loggedin) {
      this.props.dispatch({
        type: actionTypes.SAVE_SONG,
        userID: this.props.user.user.uid
      });
    } else {
      //Kaz
      this.props.dispatch({
        type: "Message",
        message:
          "You are not logged in.\nYour progress might dissapear if you exit or refresh the site."
      });
    }
  };

  //Kaz
  saveOrUpdate = () => {
    for (let savedSong of this.props.song.savedSongs) {
      if (this.props.song.currentSong.id === savedSong.id) {
        return "Update Song";
      }
    }
    return "Save Song";
  };

  render() {
    return (
      <SaveSongButtonView
        saveOrUpdate={this.saveOrUpdate()}
        saveSong={this.saveSong}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  song: state.song
});

export default connect(mapStateToProps)(SaveSongButton);
