import React, { Component } from 'react';
import { connect } from "react-redux";

class SongTitle extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

  handleChange(event) {
    this.props.dispatch({type: "CHANGESONGTITLE", songTitle: event.target.value, songID: this.props.songID})
  }

  render() {
    return (
      <input
        className="SongTitle"
        type="text"
        onChange={this.handleChange}
        value={this.props.song.title}
      />
    );
  }
}
const mapStateToProps = state => ({ song: state.song });

export default connect(mapStateToProps)(SongTitle);
