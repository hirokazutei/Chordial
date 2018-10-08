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
    case actionTypes.DELETE_CHORD:
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
    case actionTypes.TONE_UP:
      currentSong = action.song;
      break;
    case actionTypes.TONE_DOWN:
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
    case actionTypes.CHANGE_SONG:
      currentSong = action.song;
      break;
    case actionTypes.CHANGE_SONG_TITLE:
      currentSong.title = action.songTitle;
      break;
    case actionTypes.CHANGE_SONG_ARTIST:
      currentSong.artist = action.songArtist;
      break;

    //SAVE SONG
    case actionTypes.SAVE_SONG_STATE:
      savedSongID = Math.max(savedSongs.map(savedSong => savedSong.id)) + 1;
      state.currentSong.id = savedSongID;
      savedSongs.push({
        ...state.currentSong
      });
      break;
    case actionTypes.SAVE_SONG_DB:
      db.collection("UserSongs")
        .doc(action.userID)
        .set({
          data: savedSongs
        });
      break;
    case actionTypes.FETCH_SAVED_SONG:
      savedSongs = action.savedSongs;
      break;
    case actionTypes.SAVE_SONG_DB:
      savedSongs = action.savedSongs;
      break;
    case actionTypes.NEW_SONG:
      currentSong = emptySong;
      currentSong.id = savedSongID + 1;
      break;
    case actionTypes.DELETE_SONG:
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
