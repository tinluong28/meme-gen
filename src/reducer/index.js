import { combineReducers } from "redux";
import { RECEIVE_MEMES } from "../actions";

const meme = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_MEMES:
      return action.memes;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ meme });
export default rootReducer;
