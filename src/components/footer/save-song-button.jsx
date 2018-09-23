import React, { Component } from "react";
import { connect } from "react-redux";

class SaveSongButton extends Component {
  handleSave = () => {
    this.props.dispatch({ type: "SAVESONG" });
  };

  render() {
    return <button className="SaveSongButton" onClick={this.handleSave}>Save</button>;
  }
}

const mapStateToProps = state => ({
  song: state.song
});

export default connect(mapStateToProps)(SaveSongButton);
