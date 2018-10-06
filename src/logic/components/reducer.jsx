const initialState = {};

export const componentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOWCHORDSCHANGE":
      return { changeChordModal: { id: action.id, show: true } };
      break;
    default:
      return {};
  }
};
