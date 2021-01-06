import { http } from "./client";

export const createProjectRequest = async (credentials) =>
  await http.post("/api/project", credentials);

export const getAllProjectsRequest = async () => await http.get("/api/project");

export const getSingleProjectRequest = async (id) =>
  await http.get(`/api/project/${id}`);

export const editProjectRequest = async (id, credentials) =>
  await http.put(`/api/project/${id}`, { credentials });

export const deleteProjectRequest = async (id) =>
  await http.delete(`/api/project/${id}`);

export const createProjectBudget = async (id, payload) =>
  await http.post(`/api/budget/${id}`, payload);

export const editProjectBudget = async (id, payload) =>
  await http.put(`/api/budget/${id}`, payload);

export const getProjectBudget = async (id) =>
  await http.get(`/api/budget/${id}`);

export const deleteProjectBudget = async (id) =>
  await http.delete(`/api/budget/${id}`);
