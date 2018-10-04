import React, { Component } from "react";
import {PALETTE} from "../../../constants/palette"
import { Glyphicon } from "react-bootstrap";

const style = {
    chordImage: {
        width: "95%",
        height: "95%",
        align: "bottom"
    },
    songTitle: {
        fontSize: "3em",
        marginLeft: "5%",
        display: "block"
    },
    songArtist: {
        fontSize: "1.6em",
        marginLeft: "5%",
        display: "block"
       }
    }

export function ChordView(props) {
    return (
    <div style={style.chord}>
     {/* Chord Image */}
      <img src={props.chordImage} 
      alt={props.chordImage}
      style={style.chordImage} />

      {/*Dropdown Botton*/}
      <button
        className="DeleteChordButton"
      >
        <Glyphicon glyph="glyphicon glyphicon-remove" />
      </button>
      </div>
    );
  }

