import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

const SONGS = [
  { song: "Dreams", chords: ["Am", "G", "F", "G"] },
  { song: "Can You Feel It", chords: ["Am", "C", "G", "F"] },
  { song: "Wolves Without Teeth", chords: ["Bm", "A", "Em", "G", "D"] }
];

class SongDropdown extends Component {
  render() {
    return (
      <DropdownButton id="Songs" title="Songs" className="SongDropDown">
        {SONGS.map(song => (
          <MenuItem key={song.song} onSelect={() => this.props.onSong(song)}>
            {song.song}
          </MenuItem>
        ))}
      </DropdownButton>
    );
  }
  determineTitle = () => {
    if (this.state.key === "None") {
      return "Select Key";
    } else {
      return this.state.key;
    }
  };
}

export default SongDropdown;
