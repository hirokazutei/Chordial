import actionTypes from "./actionTypes";

const userInitialState = {
  loggedin: false,
  user: {
    username: "",
    image: "",
    uid: ""
  }
};

export default function userReducer(state = userInitialState, action) {
  let loggedin = state.loggedin;
  let user = state.user;
  switch (action.type) {
    case actionTypes.LOGIN:
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
