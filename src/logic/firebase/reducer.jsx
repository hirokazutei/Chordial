import fire from "../../config/Fire";

const db = fire.firestore();

export default function firebaseReducer(state = { db }, action) {
  let db = state;
  return db;
}
