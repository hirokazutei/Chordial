import React from "react";

import { Glyphicon } from "react-bootstrap";

export const SongDropdownView = props => {
  return (
    <div className="dropdown">
      <button id="Songs" title="Songs" className="dropbtn">
        <Glyphicon glyph="glyphicon glyphicon-music" />
      </button>
      <div className="dropdown-content">
        {props.savedSongs.map(song => (
          <a key={song.title} onClick={() => props.handleSong(song)}>
            {song.title}
          </a>
        ))}
      </div>
    </div>
  );
};
