import React from "react";
// Component Imports
import SongDropdown from "./songDropdown/index";
import LoginButton from "./loginButton/index";
import ProfileImage from "./profileImage/index";

export const HeaderView = props => {
  return (
    <header>
      <h1>Chord Switcher</h1>
      <div>
        <SongDropdown />
        {props.loggedin ? <ProfileImage /> : <LoginButton />}
      </div>
    </header>
  );
};
