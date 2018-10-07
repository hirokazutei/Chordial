import React, { Component } from "react";

export const SectionTitleView = props => {
  return <input type="text" onChange={props.changeTitle} value={props.value} />;
};
