import React, { Component } from "react";
import { PALETTE } from "../../../constants/palette";

const style = {
  modal: {
    display: "grid",
    position: "absolute",
    gridTemplateColumns: "repeat(7, 100px)",
    gridTemplateRows: "repeat(10, 80px)",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  selection: {
    height: "50px",
    width: "80px",
    margin: "20px",
    backgroundColor: PALETTE.orange,
    border: "none"
  }
};

export let ChangeChordModalView = props => {
  return (
    <div style={style.modal}>
      {props.KEYS.map(key => (
        <button style={style.selection} onClick={() => props.changeChord(key)}>
          {key}
        </button>
      ))}
    </div>
  );
};
