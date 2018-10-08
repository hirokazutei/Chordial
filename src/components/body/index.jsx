import React, { Component } from "react";
import { connect } from "react-redux";

import { BodyView } from "./view";

class Body extends Component {
  render() {
    return <BodyView sections={this.props.song.currentSong.sections} />;
  }
}

const mapStateToProps = state => ({ song: state.song });

export default connect(mapStateToProps)(Body);
