import React from "react";

export const SaveSongButtonView = props => {
  return <button onClick={props.saveSong}>{props.saveOrUpdate}</button>;
};
