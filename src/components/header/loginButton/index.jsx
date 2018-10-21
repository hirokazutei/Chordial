import React, { Component } from "react";
import { connect } from "react-redux";

import * as firebase from "firebase";
import fire from "../../../config/Fire";

import userActionTypes from "../../../logic/user/actionTypes";
import songActionTypes from "../../../logic/song/actionTypes";

import { LoginButtonView } from "./view";

const db = fire.firestore();

class LoginButton extends Component {
  googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        console.log(user);
        this.handleLoginData(user);
      })
      .catch(console.log);
  };

  handleLoginData = user => {
    let ref = db.collection("UserSongs").doc(user.uid);
    this.props.dispatch({
      type: userActionTypes.LOGIN,
      user: user
    });
    ref
      .get()
      .then(doc => {
        if (doc.exists) {
          let savedSongs = doc.data().data;
          this.props.dispatch({
            type: songActionTypes.FETCH_SAVED_SONG,
            savedSongs: savedSongs
          });
        }
      })
      .catch(err => {
        console.log("Error getting document", err);
      });
  };

  render() {
    return <LoginButtonView googleLogin={this.googleLogin} />;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(LoginButton);
