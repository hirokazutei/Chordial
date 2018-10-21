import actionTypes from "./actionTypes";

const initialState = {
  modal: { modalShowing: false },
  songDropdown: { hover: false }
};

export const componentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_CHORD_CHANGE:
      return {
        modal: {
          modalShowing: true,
          changeChordModal: { id: action.id, show: true }
        }
      };
      break;
    case actionTypes.CLOSE_MODAL:
      return {
        modal: {
          modalShowing: false
        }
      };
    case actionTypes.SONG_DROPDOWN_HOVER:
      return { ...state, songDropdown: { hover: true } };
    case actionTypes.SONG_DROPDOWN_UNHOVER:
      return { ...state, songDropdown: { hover: false } };
    default:
      return { ...state };
  }
};
