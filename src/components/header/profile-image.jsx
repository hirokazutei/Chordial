import React, { Component } from "react";
import { connect } from "react-redux";
import * as firebase from "firebase";
import fire from "../../config/Fire";

class ProfileImage extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="ProfileImage">
        <img
          src={this.props.user.image}
          alt="Your Profile Picture"
          width="35"
          height="35"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ProfileImage);
