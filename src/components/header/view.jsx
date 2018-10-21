import React from "react";

import { PALETTE } from "../../constants/palette";
// Component Imports
import SongDropdown from "./songDropdown/index";
import LoginButton from "./loginButton/index";
import ProfileImage from "./profileImage/index";

const style = {
  header: {
    display: "flex",
    padding: "0% 5% 0 5%",
    height: "50px",
    justifyContent: "space-between",
    color: PALETTE.greyD,
    background: PALETTE.greyB
  },
  title: {
    fontSize: "2em",
    color: "orange",
    textTransform: "uppercase",
    padding: "0",
    marginTop: "10px",
    textShadow: "2px 3px " + PALETTE.orangeDark,
    alignSelf: "left"
  },
  navBarRight: {
    display: "flex",
    justifyContent: "space-between"
  }
};

export const HeaderView = props => {
  return (
    <header style={style.header}>
      <h1 style={style.title}>Chord Switcher</h1>
      <div style={style.navBarRight}>
        <SongDropdown />
        {props.loggedin ? <ProfileImage /> : <LoginButton />}
      </div>
    </header>
  );
};
