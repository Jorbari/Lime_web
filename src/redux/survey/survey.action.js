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
  emailSurveyLinkRequest,
} from "../../api/survey";
import { SurveyActionTypes } from "./survey.types";
import _ from 'lodash';

export const createSurvey = (
  surveyData,
  history,
  surveys,
  toggleModal
) => async (dispatch) => {
  try {
    dispatch({ type: SurveyActionTypes.REQUEST_PROCESS });
    const {
      data: { data },
    } = await createSurveyRequest(surveyData);
    surveys.push(data);
    await dispatch({
      type: SurveyActionTypes.MODIFY_SURVEY_REQUEST_SUCCESS,
      payload: { survey: data, surveys },
    });
    toggleModal();
    history.push("/surveys");
  } catch (error) {
    dispatch({
      type: SurveyActionTypes.REQUEST_ERROR,
      payload: "failed to create survey",
    });
  }
};

export const editSurvey = (surveyId, surveyData, history, surveys) => async (
  dispatch
) => {
  try {
    dispatch({ type: SurveyActionTypes.REQUEST_PROCESS });
    const {
      data: { data },
    } = await editSurveyRequest(surveyId, surveyData);

    let itemIndex;
    surveys.forEach((item, index) => {
      if (item.id === surveyId) return (itemIndex = index);
    });
    surveys.splice(itemIndex, 0, data);

    await dispatch({
      type: SurveyActionTypes.MODIFY_SURVEY_REQUEST_SUCCESS,
      payload: { survey: data, surveys },
    });
    history.push("/surveys");
  } catch (error) {
    dispatch({
      type: SurveyActionTypes.REQUEST_ERROR,
      payload: error.response.data,
    });
  }
};

export const deleteSurvey = (surveyId, history, surveys) => async (
  dispatch
) => {
  try {
    dispatch({ type: SurveyActionTypes.REQUEST_PROCESS });
    await deleteSurveyRequest(surveyId);
    const newSurveys = surveys.filter((item) => item.id !== surveyId);
    await dispatch({
      type: SurveyActionTypes.SURVEYS_REQUEST_SUCCESS,
      newSurveys,
    });
    history.push("/surveys");
  } catch (error) {
    dispatch({
      type: SurveyActionTypes.REQUEST_ERROR,
      payload: error.response.data,
    });
  }
};

export const getAllSurveys = () => {
  return dispatch => _fetchAllSurvey(dispatch)
};

const _fetchAllSurvey = _.memoize(async (dispatch) => {
  try {
    dispatch({ type: SurveyActionTypes.REQUEST_PROCESS });
    const {
      data: { data },
    } = await getAllSurveysRequest();
    await dispatch({
      type: SurveyActionTypes.SURVEYS_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SurveyActionTypes.REQUEST_ERROR,
      payload: "Failed to load survey",
    });
  }
})


export const getSingleSurvey = (id) => async (dispatch) => {
  try {
    dispatch({ type: SurveyActionTypes.REQUEST_PROCESS });
    const {
      data: { data },
    } = await getSingleSurveyRequest(id);
    console.log("data>>>>", data);
    await dispatch({
      type: SurveyActionTypes.SURVEY_REQUEST_SUCCESS,
      payload: data.find((item) => item._id === id),
    });
  } catch (error) {
    dispatch({
      type: SurveyActionTypes.REQUEST_ERROR,
      payload: "An error occurred",
    });
  }
};


export const completeSurveyQuestionnaire = (
  surveyId,
  responseData,
  history,
  responses
) => async (dispatch) => {
  try {
    dispatch({ type: SurveyActionTypes.REQUEST_PROCESS });
    const {
      data: { response },
    } = await completeSurveyQuestionnaireRequest(surveyId, responseData);
    responses.push(response);
    await dispatch({
      type: SurveyActionTypes.MODIFY_RESPONSE_REQUEST_SUCCESS,
      payload: { response, responses },
    });
    history.push("/surveys");
  } catch (error) {
    dispatch({
      type: SurveyActionTypes.REQUEST_ERROR,
      payload: error.response.data,
    });
  }
};

export const getAllSurveyResponses = (surveyId) => async (dispatch) => {
  try {
    dispatch({ type: SurveyActionTypes.REQUEST_PROCESS });
    const {
      data: { responses },
    } = await getAllSurveyResponsesRequest(surveyId);
    await dispatch({
      type: SurveyActionTypes.RESPONSES_REQUEST_SUCCESS,
      responses,
    });
  } catch (error) {
    dispatch({
      type: SurveyActionTypes.REQUEST_ERROR,
      payload: error.response.data,
    });
  }
};

export const getSingleSurveyResponse = (surveyId, responseId) => async (
  dispatch
) => {
  try {
    dispatch({ type: SurveyActionTypes.REQUEST_PROCESS });
    const {
      data: { response },
    } = await getSingleResponseToSurveyRequest(surveyId, responseId);
    await dispatch({
      type: SurveyActionTypes.RESPONSE_REQUEST_SUCCESS,
      response,
    });
  } catch (error) {
    dispatch({
      type: SurveyActionTypes.REQUEST_ERROR,
      payload: error.response.data,
    });
  }
};

export const generateSurveyLink = (surveyId, url) => async (dispatch) => {
  try {
    dispatch({ type: SurveyActionTypes.REQUEST_PROCESS });
    const {
      data: { link },
    } = await generateSurveyLinkRequest(surveyId, url);
    await dispatch({
      type: SurveyActionTypes.RESPONSE_LINK_REQUEST_SUCCESS,
      link,
    });
  } catch (error) {
    dispatch({
      type: SurveyActionTypes.REQUEST_ERROR,
      payload: error.response.data,
    });
  }
};

export const emailSurveyLink = (surveyId, mail) => async (dispatch) => {
  try {
    dispatch({ type: SurveyActionTypes.REQUEST_PROCESS });
    const {
      data: { link },
    } = await emailSurveyLinkRequest(surveyId, mail);
    await dispatch({
      type: SurveyActionTypes.RESPONSE_LINK_REQUEST_SUCCESS,
      link,
    });
  } catch (error) {
    dispatch({
      type: SurveyActionTypes.REQUEST_ERROR,
      payload: error.response.data,
    });
  }
};
