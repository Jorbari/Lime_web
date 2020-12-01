import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { authReducer } from "./auth/auth.reducer";
import { projectReducer } from "./project/project.reducer";
import { questionsReducer } from "./questions/questions.reducer";
import reportReducer from "./report/report.reducer";
import { surveyReducer } from "./survey/survey.reducer";

const persistConfig = {
    key: 'base',
    storage,
    whitelist: ['report']
}

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    survey: surveyReducer,
    questionsState: questionsReducer,
    report: reportReducer
});

export default persistReducer(persistConfig, rootReducer)