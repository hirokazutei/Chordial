import React from "react";

import { PALETTE } from "../../../constants/palette";

const style = {};

export const SaveSongButtonView = props => {
  return <button onClick={props.saveSong}>{props.saveOrUpdate}</button>;
};
