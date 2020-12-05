import QuestionActionTypes from './questions.types';

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

export const addQuestionToQuestionCollections = (question_object) => dispatch => {
    dispatch({ type: QuestionActionTypes.ADD_TO_QUESTION_COLLECTION, payload: question_object })
}