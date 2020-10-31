import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { projectReducer } from "./project";
import { surveyReducer } from "./survey";

export default combineReducers({
  auth: authReducer,
  project: projectReducer,
  survey: surveyReducer
});
