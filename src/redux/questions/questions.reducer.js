import QuestionActionTypes from './questions.types';
import { 
    addDefaultQuestionToQuestions, 
    removeQuestion,
    setQuestionFormat,
    toggleRequired,
    setTitle
} from "./questions.utils";

const INITIAL_STATE = {
    currentId: -1,
    questions: []
};

export const questionsReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case QuestionActionTypes.ADD_QUESTION:
            return{
                ...state,
                ...addDefaultQuestionToQuestions(state)
            }
        case QuestionActionTypes.REMOVE_QUESTION:
            return{
                ...state,
                ...removeQuestion(state)
            }
        case QuestionActionTypes.TOGGLE_REQUIRED:
            return{
                ...state,
                questions: [...toggleRequired(state)]
            }
        case QuestionActionTypes.SET_TITLE:
            return{
                ...state,
                questions: [...setTitle(state, action.payload)]
            }
        case QuestionActionTypes.SET_CURRENTID:
            return{
                ...state,
                currentId: action.payload
            }
        case QuestionActionTypes.SET_FORMAT:
            return{
                ...state,
                questions: [...setQuestionFormat(state, action.payload)]
            }
        default:
            return {
            ...state,
            };
    }
};
