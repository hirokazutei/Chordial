import React, { Component } from "react";
import {PALETTE} from "../../../constants/palette"

const style = {
    songInfo: {
        margin: "10px",
        display: "block"
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

export function SongInfoView(props) {
    return (
    <div style={style.songInfo}>
      <input
        className="SongTitle"
        type="text"
        onChange={props.changeTitle}
        value={props.titleValue}
        style={style.songTitle}
      />
            <input
        className="SongArtist"
        type="text"
        onChange={props.changeArtist}
        value={props.artistValue}
        style={style.songArtist}
      />
      </div>
    );
  }

