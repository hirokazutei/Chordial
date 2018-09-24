import React, { Component } from "react";
import { connect } from "react-redux";

class NewSongButton extends Component {
  handleNew = () => {
    this.props.dispatch({
      type: "NewSong"
    });
  };

  render() {
    return (
      <button className="NewSongButton" onClick={() => this.handleNew()}>
        New Song
      </button>
    );
  }
}

export default connect()(NewSongButton);
