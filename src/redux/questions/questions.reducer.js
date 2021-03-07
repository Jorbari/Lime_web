import QuestionActionTypes from './questions.types';
import {
    addDefaultQuestionToQuestions,
    removeQuestion,
    AddToQuestionCollection
} from "./questions.utils";

const INITIAL_STATE = {
    currentId: -1,
    questions: [],
    // questions_collection: []
};

export const questionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case QuestionActionTypes.RESET_QUESTIONS:
            return {
                ...state,
                questions: []
            }
        case QuestionActionTypes.ADD_QUESTION:
            return {
                ...state,
                ...addDefaultQuestionToQuestions(state)
            }
        case QuestionActionTypes.REMOVE_QUESTION:
            return {
                ...state,
                ...removeQuestion(state, action.payload)
            }
        case QuestionActionTypes.SET_CURRENTID:
            return {
                ...state,
                currentId: action.payload
            }

        case QuestionActionTypes.ADD_TO_QUESTION_COLLECTION:
            return {
                ...state,
                questions_collection: AddToQuestionCollection(state.questions_collection, action.payload)
            }
        case QuestionActionTypes.UPDATE_QUESTIONS:
            return {
                ...state, questions: [...action.payload]
            }
        default:
            return {
                ...state,
            };
    }
};
