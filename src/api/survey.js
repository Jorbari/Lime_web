import { http } from "./client";

export const createSurveyRequest = async credentials =>
  await http.post("/api/survey", credentials);

export const getAllSurveysRequest = async () => await http.get("/api/survey");

export const getSingleSurveyRequest = async id =>
  await http.get(`/api/survey/${id}`);

export const editSurveyRequest = async (id, credentials) =>
  await http.put(`/api/survey/${id}`, { credentials });

export const deleteSurveyRequest = async id =>
  await http.delete(`/api/survey/${id}`);

export const completeSurveyQuestionnaireRequest = async (id, credentials) =>
  await http.put(`/api/survey/${id}`, { credentials });

export const getAllSurveyResponsesRequest = async id =>
  await http.get(`/api/survey/${id}/response`);

export const getSingleResponseToSurveyRequest = async (surveyId, responseId) =>
  await http.get(`/api/survey/${surveyId}/response/${responseId}`);

export const generateSurveyLinkRequest = async (id, url) =>
  await http.get(`/api/survey/${id}/${url}`);

export const emailSurveyLinkRequest = async (id, mail) =>
  await http.post(`/api/survey/${id}/${mail}`);
