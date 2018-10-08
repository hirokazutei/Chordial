import { combineReducers } from "redux";
import fire from "../config/Fire";
import { songReducer } from "./song/reducer";
import { componentReducer } from "./components/reducer";
import userReducer from "./user/reducer";
import firebaseReducer from "./firebase/reducer";

export const reducers = combineReducers({
  user: userReducer,
  song: songReducer,
  firebase: firebaseReducer,
  component: componentReducer
});
