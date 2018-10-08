import React, { Component } from "react";

export const NewSongButtonView = props => {
  return (
    <button className="NewSongButton" onClick={props.addNewSong}>
      New Song
    </button>
  );
};
