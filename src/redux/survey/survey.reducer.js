import { SurveyActionTypes } from "./survey.types";

const DEFAULT_STATE = {
    error: {},
    isLoading: false,
    status: undefined,
    survey: {},
    surveys: [],
    response: {},
    responses: [],
    link: ""
  };
  
  export const surveyReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
      case SurveyActionTypes.REQUEST_PROCCESS:
        return {
          ...state,
          isLoading: true,
          status: "loading"
        };
      case SurveyActionTypes.MODIFY_SURVEY_REQUEST_SUCCESS:
        return {
          ...state,
          isLoading: false,
          status: "success",
          survey: payload.survey,
          surveys: payload.surveys
        };
      case SurveyActionTypes.SURVEY_REQUEST_SUCCESS:
        return {
          ...state,
          isLoading: false,
          status: "success",
          survey: payload
        };
      case SurveyActionTypes.SURVEYS_REQUEST_SUCCESS:
        return {
          ...state,
          isLoading: false,
          status: "success",
          surveys: payload
        };
  
      case SurveyActionTypes.MODIFY_RESPONSE_REQUEST_SUCCESS:
        return {
          ...state,
          isLoading: false,
          status: "success",
          response: payload.response,
          responses: payload.responses
        };
      case SurveyActionTypes.RESPONSE_REQUEST_SUCCESS:
        return {
          ...state,
          isLoading: false,
          status: "success",
          response: payload
        };
      case SurveyActionTypes.RESPONSES_REQUEST_SUCCESS:
        return {
          ...state,
          isLoading: false,
          status: "success",
          responses: payload
        };
      case SurveyActionTypes.RESPONSE_LINK_REQUEST_SUCCESS:
        return {
          ...state,
          isLoading: false,
          status: "success",
          link: payload
        };
      case SurveyActionTypes.REQUEST_ERROR:
        return {
          ...state,
          isLoading: false,
          status: "error",
          error: payload
        };
      default:
        return state;
    }
  };

  export default surveyReducer