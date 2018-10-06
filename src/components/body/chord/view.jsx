import React, { Component } from "react";
import ChordDropdownButton from "./chord-dropdown-button/index";
import { PALETTE } from "../../../constants/palette";
import { Glyphicon } from "react-bootstrap";

const style = {
  chord: {
    width: "100px",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    background: "white",
    color: "white",
    boxShadow: "2px 3px 5px 0px black",
    alignSelf: "auto",
    padding: "10px"
  },
  chordImage: {
    width: "95%",
    height: "95%"
  },
  deleteChordButton: {
    position: "relative",
    borderRadius: "20px",
    border: "None",
    width: "25px",
    height: "25px",
    bottom: "10px",
    right: "11px",
    alignItems: "center",
    padding: "0 7px",
    color: PALETTE.black
  },
  songArtist: {
    fontSize: "1.6em",
    marginLeft: "5%",
    display: "block"
  }
};

export function ChordView(props) {
  return (
    <div style={style.chord}>
      {/* Chord Image */}
      <img
        src={props.chordImage}
        alt={props.chordImage}
        style={style.chordImage}
      />

      {/*Delete Chord Botton*/}
      <button style={style.deleteChordButton} onClick={props.deleteChord}>
        <Glyphicon glyph="glyphicon glyphicon-remove" />
      </button>

      {/*Chord Dropdown Button*/}
      <ChordDropdownButton chord={props.chord} chordID={props.chordID} />
    </div>
  );
}
