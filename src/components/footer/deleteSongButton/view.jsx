import React from "react";

export const DeleteSongButtonView = props => {
  return (
    <button className="DeleteSongButton" onClick={props.deleteSong}>
      Delete Song
    </button>
  );
};
