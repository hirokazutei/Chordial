import React, { Component } from "react";
import { connect } from "react-redux";
import { BodyView } from "./view";

class Body extends Component {
  render() {
    return <BodyView song={this.props} />;
  }
}

const mapStateToProps = state => ({ song: state.song });

export default connect(mapStateToProps)(Body);
