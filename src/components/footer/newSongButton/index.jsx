import React, { Component } from "react";
import { connect } from "react-redux";

import actionTypes from "../../../logic/song/actionTypes";
import { NewSongButtonView } from "./view";

class NewSongButton extends Component {
  addNewSong = () => {
    this.props.dispatch({
      type: actionTypes.NEW_SONG
    });
  };

  render() {
    return <NewSongButtonView addNewSong={this.addNewSong} />;
  }
}

export default connect()(NewSongButton);
