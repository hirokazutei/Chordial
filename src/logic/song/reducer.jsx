import actionTypes from "./actionTypes";
import fire from "../../config/Fire";
import { emptySong, presetSongs } from "../../constants/preset";

const db = fire.firestore();

const songInitialState = { ...presetSongs };

export const songReducer = (state = songInitialState, action) => {
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
    case actionTypes.ADD_NEW_CHORD:
      currentSong.chordID = currentSong.chordID + 1;
      currentSong.sections[action.sectionID].chords.push({
        id: currentSong.chordID,
        chordKey: "A"
      });
      break;
    case actionTypes.CHANGE_CHORD_KEY:
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
    case actionTypes.CHANGE_SECTION_TITLE:
      for (let section of currentSong.sections) {
        if (section.id === action.sectionID) {
          section.name = action.sectionName;
        }
      }
      break;
    case actionTypes.ADD_NEW_SECTION:
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
    case actionTypes.DELETE_SECTION:
      currentSong.sections = currentSong.sections.filter(
        section => section.id !== action.sectionID
      );
      break;
    //SONG LEVEL
    case "SONGCHANGE":
      currentSong = action.song;
      break;
    case actionTypes.CHANGE_SONG_TITLE:
      currentSong.title = action.songTitle;
      break;
    case actionTypes.CHANGE_SONG_ARTIST:
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
};
