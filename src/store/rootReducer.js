import { combineReducers } from "redux";

// reducers
import { meditationReducer } from "./modules/meditation";

export default combineReducers({
  meditation: meditationReducer
});
