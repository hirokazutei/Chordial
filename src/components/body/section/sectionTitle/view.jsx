import React, { Component } from "react";
import { PALETTE } from "../../../../constants/palette";

const style = {
  sectionTitle: {
    fontSize: "1.6em",
    float: "left",
    margin: "0% 5%",
    color: PALETTE.greyC,
    background: "none",
    border: "none"
  }
};

export const SectionTitleView = props => {
  return (
    <input
      style={style.sectionTitle}
      type="text"
      onChange={props.changeTitle}
      value={props.value}
    />
  );
};
