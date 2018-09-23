import React, { Component } from 'react';
import { connect } from "react-redux";

class SongArtist extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

  handleChange(event) {
    this.props.dispatch({type: "CHANGESONGARTIST", songArtist: event.target.value, songID: this.props.songID})
  }

  render() {
    return (
      <input
        className="SongArtist"
        type="text"
        onChange={this.handleChange}
        value={this.props.song.artist}
      />
    );
  }
}
const mapStateToProps = state => ({ song: state.song });

export default connect(mapStateToProps)(SongArtist);
