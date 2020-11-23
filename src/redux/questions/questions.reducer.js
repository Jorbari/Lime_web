import QuestionActionTypes from './questions.types';
import { 
    addDefaultQuestionToQuestions, 
    removeQuestion,
    setQuestionFormat
} from "./questions.utils";

const INITIAL_STATE = {
    currentId: 0,
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
