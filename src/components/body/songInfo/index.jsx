import React, { Component } from "react";
import {SongInfoView} from './view'
import { connect } from "react-redux";
import actionTypes from "../../../logic/song/actionTypes"

class SongInfo extends Component {
changeTitle = (event) => {
    this.props.dispatch({
        type: actionTypes.CHANGE_SONG_TITLE,
        songTitle: event.target.value,
        songID: this.props.song.currentSong.id
    })
}

changeArtist = (event) => {
    this.props.dispatch({
        type: actionTypes.CHANGE_SONG_ARTIST,
        songArtist: event.target.value,
        songID: this.props.song.currentSong.id
    })
}

changeArtist 

  render() {
    return (
        <SongInfoView
        changeTitle={this.changeTitle}
        titleValue={this.props.song.currentSong.title}
        changeArtist={this.changeArtist}
        artistValue={this.props.song.currentSong.artist}
      />)
    }
}

const mapStateToProps = state => ({ song: state.song });


export default connect(mapStateToProps)(SongInfo);
