import React from "react";
import { Glyphicon } from "react-bootstrap";
import { PALETTE } from "../../../constants/palette";

const style = {
  songDropdown: {
    display: "none",
    position: "relative",
    width: "70px",
    height: "30px",
    top: "115%",
    right: "160%",
    color: PALETTE.greyB,
    background: PALETTE.orangeLight,
    border: "none"
  },
  dropdownButton: {
    background: PALETTE.orangeLight,
    color: PALETTE.greyA,
    padding: "0.5em 0.5em",
    height: "auto",
    border: "none",
    margin: "10px 15px 0px 25px"
  }
};

export const SongDropdownView = props => {
  return (
    <div>
      <button style={style.dropdownButton} id="Songs" title="Songs">
        <Glyphicon glyph="glyphicon glyphicon-music" />
      </button>
      <div className="songDropdown" style={style.songDropdown}>
        {props.savedSongs.map(song => (
          <a
            /*style={style.songDropdown}*/
            key={song.title}
            onClick={() => props.changeSong(song)}
          >
            {song.title}
          </a>
        ))}
      </div>
    </div>
  );
};
