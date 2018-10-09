import actionTypes from "./actionTypes";

const initialState = {};

export const componentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_CHANGE_CHORD:
      return { changeChordModal: { id: action.id, show: true } };
      break;
    default:
      return {};
  }
};
