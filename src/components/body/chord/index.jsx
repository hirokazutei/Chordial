import React, { Component } from "react";
import {ChordView} from './view'
import { connect } from "react-redux";
import actionTypes from "../../../logic/song/actionTypes"

const KEYS = require("../../../static/constants");

class SongInfo extends Component {
    determineTitle = (chord) => {
        if (chord === "None") {
          return "Select Key";
        } else {
          return chord;
        }
      };

    obtainImage = () => {
        let chordImageSource = require(`../../../chords/None.png`);
        if (KEYS.includes(this.props.chordKey)) {
            chordImageSource = require(`../../../chords/${this.props.chordKey}.png`);
        }
        return chordImageSource
    }

  render() {
    return (
        <ChordView
        //dropdownList={}
        chordImage={this.obtainImage()}
        keys={KEYS}
      />)
    }
}

const mapStateToProps = state => ({ song: state.song });


export default connect(mapStateToProps)(SongInfo);
