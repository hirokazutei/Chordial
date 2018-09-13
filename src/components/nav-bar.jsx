import React, { Component } from "react";
// Component Imports
import SongDropdown from "./song-dropdown";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <h1 className="Title">Chord Switcher</h1>
        <SongDropdown onSong={this.props.onSong} />
      </nav>
    );
  }
}

export default NavBar;
