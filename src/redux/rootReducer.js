import {combineReducers} from "redux";
import {authReducer} from "./auth/auth.reducer";
import {projectReducer} from "./project/project.reducer";
import {surveyReducer} from "./survey/survey.reducer";

export default combineReducers({
    auth: authReducer,
    project: projectReducer,
    survey: surveyReducer
});
