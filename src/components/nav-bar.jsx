import React, { Component } from "react";
import { connect } from "react-redux";
// Component Imports
import SongDropdown from "./song-dropdown";
import LoginButton from "./log-in-button";
import ProfileImage from "./profile-image";

class NavBar extends Component {
  render() {
    if (!this.props.loggedin) {
      return (
        <header className="NavBar">
          <h1 className="Title">Chord Switcher</h1>
          <div>
            <SongDropdown />
            <LoginButton />
          </div>
        </header>
      );
    } else {
      return (
        <header className="NavBar">
          <h1 className="Title">Chord Switcher</h1>
          <div>
            <SongDropdown />
            <ProfileImage />
          </div>
        </header>
      );
    }
  }
}

const mapStateToProps = state => ({
  loggedin: state.loggedin
});

export default connect(mapStateToProps)(NavBar);
