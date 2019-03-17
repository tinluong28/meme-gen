import { combineReducers } from "redux";
import { RECEIVE_MEMES, NEW_MEME } from "../actions";

const meme = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_MEMES:
      return action.memes;
    default:
      return state;
  }
};

const myMemes = (state = [], action) => {
  switch (action.type) {
    case NEW_MEME:
      state = [...state, action.meme];
      return state;
    default:
      return state;
  }
};
const rootReducer = combineReducers({ meme, myMemes });
export default rootReducer;
