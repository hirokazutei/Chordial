import "./index.css";
import { combineReducers } from "redux";
import fire from "./config/Fire";

const db = fire.firestore();

const emptySong = {
  id: 0,
  title: "New Song",
  artist: "Artist",
  sections: [
    {
      id: 0,
      name: "Section 1",
      chords: [
        {
          id: 0,
          chordKey: "A"
        }
      ]
    }
  ],
  chordID: 0,
  sectionID: 0
};

const userInitialState = {
  loggedin: false,
  user: {
    username: "",
    image: "",
    uid: ""
  }
};

const songInitialState = {
  savedSongID: 3,
  currentSong: {
    id: 0,
    title: "Dreams",
    artist: "FleetwoodMac",
    sections: [
      {
        id: 0,
        name: "Section 1",
        chords: [
          {
            id: 0,
            chordKey: "Am"
          },
          {
            id: 1,
            chordKey: "G"
          },
          {
            id: 2,
            chordKey: "F"
          },
          {
            id: 3,
            chordKey: "G"
          }
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
            {
              id: 0,
              chordKey: "Am"
            },
            {
              id: 1,
              chordKey: "G"
            },
            {
              id: 2,
              chordKey: "F"
            },
            {
              id: 3,
              chordKey: "G"
            }
          ]
        }
      ],
      chordID: 3,
      sectionID: 0
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
            {
              id: 0,
              chordKey: "Am"
            },
            {
              id: 1,
              chordKey: "C"
            },
            {
              id: 2,
              chordKey: "G"
            },
            {
              id: 3,
              chordKey: "F"
            }
          ]
        }
      ],
      chordID: 3,
      sectionID: 0
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
            {
              id: 0,
              chordKey: "Bm"
            },
            {
              id: 1,
              chordKey: "A"
            },
            {
              id: 2,
              chordKey: "Em"
            },
            {
              id: 3,
              chordKey: "G"
            },
            {
              id: 4,
              chordKey: "D"
            }
          ]
        }
      ],
      chordID: 4,
      sectionID: 0
    }
  ]
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

function songReducer(state = songInitialState, action) {
  let savedSongID = state.savedSongID;
  let currentSong = {
    ...state.currentSong
  };
  let savedSongs = [...state.savedSongs];

  switch (action.type) {
    //CHORD LEVEL
    case "CHORDDELETE":
      for (let section of currentSong.sections) {
        section.chords = [
          ...section.chords.filter(chord => chord.id !== action.chordID)
        ];
      }
      break;
    case "CHORDADD":
      currentSong.chordID = currentSong.chordID + 1;
      currentSong.sections[action.sectionID].chords.push({
        id: currentSong.chordID,
        chordKey: "A"
      });
      break;
    case "CHORDCHANGE":
      for (let section of currentSong.sections) {
        for (let chord of section.chords) {
          if (chord.id === action.id) {
            chord.chordKey = action.newKey;
          }
        }
      }
      break;
    case "TONEUP":
      currentSong = action.songf;
      break;
    case "TONEDOWN":
      currentSong = action.song;
      break;
    //SECTION LEVEL
    case "CHANGESECTIONTITLE":
      for (let section of currentSong.sections) {
        if (section.id === action.sectionID) {
          section.name = action.sectionName;
        }
      }
      break;
    case "ADDNEWSECTION":
      currentSong.chordID = currentSong.chordID + 1;
      currentSong.sectionID = currentSong.sectionID + 1;
      let newSection = {
        id: currentSong.sectionID,
        name: "New Section",
        chords: [
          {
            id: currentSong.chordID,
            chordKey: "A"
          }
        ]
      };
      currentSong.sections.push(newSection);
      break;
    case "SECTIONDELETE":
      currentSong.sections = currentSong.sections.filter(
        section => section.id !== action.sectionID
      );
      break;
    //SONG LEVEL
    case "SONGCHANGE":
      currentSong = action.song;
      break;
    case "CHANGESONGTITLE":
      currentSong.title = action.songTitle;
      break;
    case "CHANGESONGARTIST":
      currentSong.artist = action.songArtist;
      break;

    //SAVE SONG
    case "SaveSongState":
      savedSongID = Math.max(savedSongs.map(savedSong => savedSong.id)) + 1;
      state.currentSong.id = savedSongID;
      savedSongs.push({
        ...state.currentSong
      });
      break;
    case "SaveSongDB":
      db.collection("UserSongs")
        .doc(action.userID)
        .set({
          data: savedSongs
        });
      break;
    case "FetchSavedSong":
      savedSongs = action.savedSongs;
      break;
    case "UpdateSavedSong":
      savedSongs = action.savedSongs;
      break;
    case "NewSong":
      currentSong = emptySong;
      currentSong.id = savedSongID + 1;
      break;
    case "DeleteSong":
      savedSongs = action.savedSongs;
      currentSong = emptySong;
      currentSong.id = savedSongID + 1;
      break;
    default:
      return {
        currentSong: currentSong,
        savedSongs: savedSongs,
        savedSongID: savedSongID
      };
  }
  return {
    currentSong: currentSong,
    savedSongs: savedSongs,
    savedSongID: savedSongID
  };
}

export const reducers = combineReducers({
  user: userReducer,
  song: songReducer,
  firebase: firebaseReducer
});
