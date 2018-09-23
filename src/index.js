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
  user: {
    username: "UNKNOWN",
    image: "",
    uid: ""
  },
  savedSongID: 3,
  song: {
      id: 0,
    title: "Dreams",
    artist: "FleetwoodMac",
    sections: [
      {
        id: 0,
        name: "Section 1",
        chords: [
          { id: 0, chordKey: "Am" },
          { id: 1, chordKey: "G" },
          { id: 2, chordKey: "F" },
          { id: 3, chordKey: "G" }
        ]
      }
    ],
    chordID: 3,
    sectionID: 0
  },
  savedSongs: [
    {
        id: 0,
      title: "Dreams",
      artist: "Fleetwood Mac",
      sections: [
        {
          id: 0,
          name: "Section 1",
          chords: [
            { id: 0, chordKey: "Am" },
            { id: 1, chordKey: "G" },
            { id: 2, chordKey: "F" },
            { id: 3, chordKey: "G" }
          ]
        }
      ]
    },
    {
        id: 1,
      title: "Can You Feel It",
      artist: "Chaos Chaos",
      sections: [
        {
          id: 1,
          name: "Section 1",
          chords: [
            { id: 0, chordKey: "Am" },
            { id: 1, chordKey: "C" },
            { id: 2, chordKey: "G" },
            { id: 3, chordKey: "F" }
          ]
        }
      ]
    },
    {
        id: 2,
      title: "Wolves Without Teeth",
      artist: "of Monsters and Men",
      sections: [
        {
          id: 2,
          name: "Section 1",
          chords: [
            { id: 0, chordKey: "Bm" },
            { id: 1, chordKey: "A" },
            { id: 2, chordKey: "Em" },
            { id: 3, chordKey: "G" },
            { id: 4, chordKey: "D" }
          ]
        }
      ]
    }
  ]
};

const db = fire.firestore();

function reducer(state = initialState, action) {
  let loggedin = state.loggedin;
  let user = state.user;
  let savedSongID = state.savedSongID;
  let song = {...state.song};
  let savedSongs = [...state.savedSongs];

  switch (action.type) {
    case "CHORDDELETE":
      for (let section of song.sections) {
        section.chords = [
          ...section.chords.filter(chord => chord.id !== action.chordID)
        ];
      }
      break;
    case "CHORDADD":
      song.chordID = song.chordID + 1;
      song.sections[action.sectionID].chords.push({
        id: song.chordID,
        chordKey: "A"
      });
      break;
    case "CHORDCHANGE":
      for (let section of song.sections) {
        for (let chord of section.chords) {
          if (chord.id === action.id) {
            chord.chordKey = action.newKey;
          }
        }
      }
      break;
    case "SONGCHANGE":
      song = action.song;
      break;
    case "CHANGESECTIONTITLE":
      for (let section of song.sections) {
          if (section.id === action.sectionID) {
              section.name = action.sectionName
          }
      }
    case "CHANGESONGTITLE":
      song.title = action.songTitle
      break;
    case "CHANGESONGARTIST":
      song.artist = action.songArtist
      break;
    case "TONEUP":
      song = action.song;
      break;
    case "TONEDOWN":
      song = action.song;
      break;
    case "ADDNEWSECTION":
      song.chordID = song.chordID + 1
      song.sectionID = song.sectionID + 1;
      let newSection = {
        id: song.sectionID,
        name: "New Section",
        chords: [{ id: song.chordID, chordKey: "A" }]
      };
      song.sections.push(newSection);
      console.log(song.sections);
      break;
    case "LOGINNOSONGS":
      alert("LOGGED IN!");
      user.image = action.user.photoURL;
      user.username = action.user.Qb.displayName;
      user.uid = action.user.uid;
      loggedin = true;
      break;
    case "LOGINGETSONGS":
      alert("LOGGED IN!");
      user.image = action.user.photoURL;
      user.username = action.user.Qb.displayName;
      user.uid = action.user.uid;
      loggedin = true;
      savedSongs = action.savedSongs;
      break;
    case "SAVESONG":
      if (loggedin) {
        savedSongID = Math.max(savedSongs.map(savedSong => savedSong.id)) + 1
        state.song.id = savedSongID
        savedSongs.push({...state.song});
        let data = db
          .collection("UserSongs")
          .doc(user.uid)
          .set({ data: savedSongs });
      } else {
        alert("Not Logged In!");
      }
    case "SECTIONDELETE":
    song = { ...song };
    song.sections = song.sections.filter(section => section.id !== action.sectionID)
    console.log(song.sections);
    break; 
    default:
      return {
        loggedin: loggedin,
        user: user,
        song: song,
        savedSongs: savedSongs
      };
  }
  return {
    loggedin: loggedin,
    user: user,
    song: song,
    savedSongs: savedSongs
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
