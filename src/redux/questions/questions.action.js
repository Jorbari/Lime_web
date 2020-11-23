import QuestionActionTypes from './questions.types';

export const addQuestion = () => dispatch =>{
    dispatch({type: QuestionActionTypes.ADD_QUESTION});
}

export const removeQuestion = () => dispatch =>{
    dispatch({type: QuestionActionTypes.REMOVE_QUESTION});
}

export const setFormat = (format) => dispatch =>{
    dispatch({type: QuestionActionTypes.SET_FORMAT, payload:format});
}

export const setCurrentId = (id) => dispatch =>{
    dispatch({type: QuestionActionTypes.SET_FORMAT, payload: id });
}