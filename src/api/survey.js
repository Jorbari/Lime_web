import { http } from "./client";

export const createSurveyRequest = async credentials =>
  await http.post("/survey", credentials);

export const getAllSurveysRequest = async () => await http.get("/survey");

export const getSingleSurveyRequest = async id =>
  await http.get(`/survey/${id}`);

export const editSurveyRequest = async (id, credentials) =>
  await http.put(`/survey/${id}`, { credentials });

export const deleteSurveyRequest = async id =>
  await http.delete(`/survey/${id}`);

export const completeSurveyQuestionnaireRequest = async (id, credentials) =>
  await http.post(`/survey/${id}`, { credentials });

export const getAllSurveyResponsesRequest = async id =>
  await http.get(`/survey/${id}/response`);

export const getSingleResponseToSurveyRequest = async (surveyId, responseId) =>
  await http.get(`/survey/${surveyId}/response/${responseId}`);

export const generateSurveyLinkRequest = async (id, url) =>
  await http.get(`/survey/${id}/${url}`);

export const emailSurveyLinkRequest = async (id, mail) =>
  await http.post(`/survey/${id}/${mail}`);
