import { completeSurveyQuestionnaireRequest, createQuestionRequest } from '../../api/survey';
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

export const addQuestionToQuestionCollections = (question_object, question_id) => async (dispatch) => {
    try {
        const { data: { response }, } = await createQuestionRequest(question_id, modifyQuestionNodesTitle(question_object));
        dispatch({ type: QuestionActionTypes.ADD_TO_QUESTION_COLLECTION, payload: response })

    }
    catch (error) {
        console.log(error.response)
    }
}

const modifyQuestionNodesTitle = (question) => {
    return {
        isRequired: question.required,
        question_body: question.title,
        question_options: question.shape,
        format: question.format
    }
}