import React, { Component } from "react";
import { PALETTE } from "../../../constants/palette";

const style = {
  songInfo: {
    margin: "10px",
    display: "flex",
    justifyItems: "flex-start"
  },
  songTitle: {
    fontSize: "2.5em",
    width: "100px",
    marginLeft: "5%",
    background: "none",
    border: "none",
    color: PALETTE.greyD
  },
  songArtist: {
    fontSize: "1.6em",
    marginLeft: "25px",
    background: "none",
    border: "none",
    color: PALETTE.greyD
  }
};

export function SongInfoView(props) {
  let songTitleWidth = props.titleValue.length * 25;
  let songArtistWidth = props.artistValue.length * 15;
  return (
    <div style={style.songInfo}>
      <input
        type="text"
        onChange={props.changeTitle}
        value={props.titleValue}
        style={{ ...style.songTitle, width: songTitleWidth }}
      />
      <input
        type="text"
        onChange={props.changeArtist}
        value={props.artistValue}
        style={{ ...style.songArtist, width: songArtistWidth }}
      />
    </div>
  );
}
