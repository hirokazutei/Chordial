import { combineReducers } from "redux";
import fire from "../config/Fire";
import {songReducer} from './song/reducer'

const db = fire.firestore();

const userInitialState = {
  loggedin: false,
  user: {
    username: "",
    image: "",
    uid: ""
  }
};

function firebaseReducer(state = { db }, action) {
  let db = state;
  return db;
}

function userReducer(state = userInitialState, action) {
  let loggedin = state.loggedin;
  let user = state.user;
  switch (action.type) {
    case "Login":
      alert("LOGGED IN!");
      user.image = action.user.photoURL;
      user.username = action.user.Qb.displayName;
      user.uid = action.user.uid;
      loggedin = true;
      break;
    default:
      return {
        loggedin: loggedin,
        user: user
      };
  }
  return {
    loggedin: loggedin,
    user: user
  };
}


export const reducers = combineReducers({
  user: userReducer,
  song: songReducer,
  firebase: firebaseReducer
});
