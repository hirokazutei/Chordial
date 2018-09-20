import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as firebase from "firebase";
import fire from "./config/Fire";

const initialState = {
  loggedin: false,
  id: 3,
  user: {
    username: "UNKNOWN",
    image: ""
  },
  chords: [
    { id: 0, chordKey: "Am" },
    { id: 1, chordKey: "G" },
    { id: 2, chordKey: "F" },
    { id: 3, chordKey: "G" }
  ],
  songs: [
    { name: "Dreams", artist: "Fleetwood Mac", chords: ["Am", "G", "F", "G"] },
    {
      name: "Can You Feel It",
      artist: "Chaos Chaos",
      chords: ["Am", "C", "G", "F"]
    },
    {
      name: "Wolves Without Teeth",
      artist: "of Monsters and Men",
      chords: ["Bm", "A", "Em", "G", "D"]
    }
  ]
};

const db = fire.firestore();

function reducer(state = initialState, action) {
  let user = state.user;
  let loggedin = state.loggedin;

  let id = state.id;
  let chords = state.chords;
  let songs = state.songs;
  switch (action.type) {
    case "CHORDDELETE":
      chords = [...state.chords.filter(chord => chord.id !== action.chordID)];
      break;
    case "CHORDADD":
      id = state.id + 1;
      chords.push({ id: id, chordKey: "A" });
      break;
    case "CHORDCHANGE":
      chords = [...state.chords];
      for (let i = 0; i < chords.length; i++) {
        if (chords[i].id === action.id) {
          chords[i].chordKey = action.newKey;
        }
      }
      break;
    case "SONGCHANGE":
      id = action.addID;
      chords = action.songChords;
      break;
    case "TONEUP":
      id = action.addID;
      chords = action.newChords;
    case "TONEDOWN":
      id = action.addID;
      chords = action.newChords;
      break;
    case "LOGIN":
      alert("LOGGED IN!");
      user.image = action.user.photoURL;
      user.username = action.user.Qb.displayName;
      console.log(action.user);

      var data = {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      };
      var setDoc = db
        .collection("Songs")
        .doc("LA")
        .set(data);
      loggedin = true;
      break;
    default:
      return {
        user: user,
        loggedin: loggedin,
        id: id,
        chords: chords,
        songs: songs
      };
  }
  return {
    user: user,
    loggedin: loggedin,
    id: id,
    chords: chords,
    songs: songs
  };
}

const store = createStore(reducer);

const TheApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<TheApp />, document.getElementById("root"));
registerServiceWorker();
