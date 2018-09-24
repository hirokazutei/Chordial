import React, { Component } from "react";
import { connect } from "react-redux";
import * as firebase from "firebase";
import fire from "../../config/Fire";

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
      type: "Login",
      user: user
    });
    ref
      .get()
      .then(doc => {
        if (doc.exists) {
          let savedSongs = doc.data().data;
          this.props.dispatch({
            type: "FetchSavedSong",
            savedSongs: savedSongs
          });
        }
      })
      .catch(err => {
        console.log("Error getting document", err);
      });
  };

  render() {
    return (
      <div>
        <button className="LoginButton" onClick={this.googleLogin}>
          LOGIN
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(LoginButton);
