import React, { Component } from "react";
import { connect } from "react-redux";

import { ProfileImageView } from "./view";

class ProfileImage extends Component {
  render() {
    return <ProfileImageView userImage={this.props.userImage} />;
  }
}

const mapStateToProps = state => ({
  userImage: state.user.user.image
});

export default connect(mapStateToProps)(ProfileImage);
