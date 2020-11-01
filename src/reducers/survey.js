import {
  createSurveyRequest,
  getAllSurveysRequest,
  getSingleSurveyRequest,
  editSurveyRequest,
  deleteSurveyRequest,
  completeSurveyQuestionnaireRequest,
  getAllSurveyResponsesRequest,
  getSingleResponseToSurveyRequest,
  generateSurveyLinkRequest,
  emailSurveyLinkRequest
} from "../../src/api/survey";

const REQUEST_PROCCESS = "REQUEST_PROCCESS";
const REQUEST_ERROR = "REQUEST_ERROR";
const SURVEY_REQUEST_SUCCESS = "SURVEY_REQUEST_SUCCESS";
const SURVEYS_REQUEST_SUCCESS = "SURVEYS_REQUEST_SUCCESS";
const MODIFY_SURVEY_REQUEST_SUCCESS = "MODIFY_SURVEY_REQUEST_SUCCESS";
const RESPONSE_REQUEST_SUCCESS = "RESPONSE_REQUEST_SUCCESS";
const RESPONSES_REQUEST_SUCCESS = "RESPONSES_REQUEST_SUCCESS";
const MODIFY_RESPONSE_REQUEST_SUCCESS = "MODIFY_RESPONSE_REQUEST_SUCCESS";
const RESPONSE_LINK_REQUEST_SUCCESS = "RESPONSE_LINK_REQUEST_SUCCESS";

export const createSurvey = (
  surveyData,
  history,
  surveys
) => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    const {
      data: { survey }
    } = await createSurveyRequest(surveyData);
    surveys.push(survey);
    await dispatch({
      type: MODIFY_SURVEY_REQUEST_SUCCESS,
      payload: { survey, surveys }
    });
    history.push("/surveys");
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

export const editSurvey = (
  surveyId,
  surveyData,
  history,
  surveys
) => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    const {
      data: { survey }
    } = await editSurveyRequest(surveyId, surveyData);

    let itemIndex;
    surveys.forEach((item, index) => {
      if (item.id === surveyId) return (itemIndex = index);
    });
    surveys.splice(itemIndex, 0, survey);

    await dispatch({
      type: MODIFY_SURVEY_REQUEST_SUCCESS,
      payload: { survey, surveys }
    });
    history.push("/surveys");
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

export const deleteSurvey = (surveyId, history, surveys) => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    await deleteSurveyRequest(surveyId);
    const newSurveys = surveys.filter(item => item.id !== surveyId);
    await dispatch({
      type: SURVEYS_REQUEST_SUCCESS,
      newSurveys
    });
    history.push("/surveys");
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

export const getAllSurveys = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    const {
      data: { surveys }
    } = await getAllSurveysRequest();
    await dispatch({
      type: SURVEYS_REQUEST_SUCCESS,
      surveys
    });
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

export const getSingleSurvey = id => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    const {
      data: { survey }
    } = await getSingleSurveyRequest(id);
    await dispatch({
      type: SURVEY_REQUEST_SUCCESS,
      survey
    });
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

export const completeSurveyQuestionnaire = (
  surveyId,
  responseData,
  history,
  responses
) => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    const {
      data: { response }
    } = await completeSurveyQuestionnaireRequest(surveyId, responseData);
    responses.push(response);
    await dispatch({
      type: MODIFY_RESPONSE_REQUEST_SUCCESS,
      payload: { response, responses }
    });
    history.push("/surveys");
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

export const getAllSurveyResponses = surveyId => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    const {
      data: { responses }
    } = await getAllSurveyResponsesRequest(surveyId);
    await dispatch({
      type: RESPONSES_REQUEST_SUCCESS,
      responses
    });
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

export const getSingleSurveyResponse = (
  surveyId,
  responseId
) => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    const {
      data: { response }
    } = await getSingleResponseToSurveyRequest(surveyId, responseId);
    await dispatch({
      type: RESPONSE_REQUEST_SUCCESS,
      response
    });
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

export const generateSurveyLink = (surveyId, url) => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    const {
      data: { link }
    } = await generateSurveyLinkRequest(surveyId, url);
    await dispatch({
      type: RESPONSE_LINK_REQUEST_SUCCESS,
      link
    });
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

export const emailSurveyLink = (surveyId, mail) => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    const {
      data: { link }
    } = await emailSurveyLinkRequest(surveyId, mail);
    await dispatch({
      type: RESPONSE_LINK_REQUEST_SUCCESS,
      link
    });
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

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
    case REQUEST_PROCCESS:
      return {
        ...state,
        isLoading: true,
        status: "loading"
      };
    case MODIFY_SURVEY_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: "success",
        survey: payload.survey,
        surveys: payload.surveys
      };
    case SURVEY_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: "success",
        survey: payload
      };
    case SURVEYS_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: "success",
        surveys: payload
      };

    case MODIFY_RESPONSE_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: "success",
        response: payload.response,
        responses: payload.responses
      };
    case RESPONSE_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: "success",
        response: payload
      };
    case RESPONSES_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: "success",
        responses: payload
      };
    case RESPONSE_LINK_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: "success",
        link: payload
      };
    case REQUEST_ERROR:
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
