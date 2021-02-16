import { http } from "./client";

export const createSurveyRequest = async (credentials) =>
  await http.post("/api/survey", credentials);

export const createQuestionRequest = async (survey_id, credentials) =>
  await http.post(`/api/question/${survey_id}`, credentials);

export const addSurveyQuestions = async (survey_id, questions) =>
  await http.post(`/api/question/${survey_id}`, questions);

export const updateSurveyQuestions = async (survey_id, questions) =>
  await http.put(`/api/question/${survey_id}`, questions);

export const createSurveyResponse = async (survey_id, responses) =>
  await http.post(`/api/response/${survey_id}`, responses);

export const getAllSurveysRequest = async () => await http.get("/api/survey");

export const getTotalSurveys = async () => await http.get(`/api/survey/total`);

export const getSingleSurveyRequest = async (id) =>
  await http.get(`/api/survey/${id}`);

export const editSurveyRequest = async (id, credentials) =>
  await http.put(`/api/survey/${id}`, { credentials });

export const deleteSurveyRequest = async (id) =>
  await http.delete(`/api/survey/${id}`);

export const completeSurveyQuestionnaireRequest = async (id, credentials) =>
  await http.put(`/api/survey/${id}`, { credentials });

export const getAllSurveyResponsesRequest = async (id) =>
  await http.get(`/api/survey/${id}/response`);

export const getSingleResponseToSurveyRequest = async (surveyId, responseId) =>
  await http.get(`/api/survey/${surveyId}/response/${responseId}`);

export const generateSurveyLinkRequest = async (id, url) =>
  await http.get(`/api/survey/${id}/${url}`);

export const emailSurveyLinkRequest = async (id, mail) =>
  await http.post(`/api/survey/${id}/${mail}`);

export const getSurveyQuestions = async (id) =>
  await http.get(`/api/question/${id}/preview`);

export const getAllResponsesForSurvey = async (id) =>
  await http.get(`/api/response/${id}/all`);

export const getAllResponsesForLiveSurvey = async (id) =>
  await http.get(`/api/response/${id}/live`);

export const getAllResponsesForWebLink = async (id) =>
  await http.get(`/api/response/${id}/web`);

export const getIndividualResponse = async (surveyId, responseId) =>
  await http.get(`/api/survey/${surveyId}/responses?page=${responseId}`);

export const deleteResponse = async (response_id) =>
  await http.delete(`/api/response/${response_id}`);
export const recentSurvey = async () => await http.get(`/api/survey/recent`);

export const shareSurvey = async (survey_id, payload) =>
  await http.post(`/api/survey/${survey_id}/share`, payload);
