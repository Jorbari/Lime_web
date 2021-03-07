import { completeSurveyQuestionnaireRequest, createQuestionRequest,addSurveyQuestions } from '../../api/survey';
import QuestionActionTypes from './questions.types';

export const resetQuestions = () => dispatch => {
    dispatch({ type: QuestionActionTypes.RESET_QUESTIONS });
}

export const addQuestion = () => dispatch => {
    dispatch({ type: QuestionActionTypes.ADD_QUESTION });
}

export const removeQuestion = (questionId) => dispatch => {
    dispatch({ type: QuestionActionTypes.REMOVE_QUESTION, payload: questionId });
}

export const toggleRequired = () => dispatch => {
    dispatch({ type: QuestionActionTypes.TOGGLE_REQUIRED });
}

export const setTitle = (title) => dispatch => {
    dispatch({ type: QuestionActionTypes.SET_TITLE, payload: title });
}

export const setFormat = (format) => dispatch => {
    dispatch({ type: QuestionActionTypes.SET_FORMAT, payload: format });
}

export const setCurrentId = (id) => dispatch => {
    dispatch({ type: QuestionActionTypes.SET_CURRENTID, payload: id });
}

export const updateQuestions = (questions_array) => {
    return dispatch => {
        dispatch({ type: QuestionActionTypes.UPDATE_QUESTIONS, payload: questions_array })
    }
}