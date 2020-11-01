import { http } from "./client";

export const createProjectRequest = async credentials =>
  await http.post("/api/project", credentials);

export const getAllProjectsRequest = async () => await http.get("/api/project");

export const getSingleProjectRequest = async id =>
  await http.get(`/api/project/${id}`);

export const editProjectRequest = async (id, credentials) =>
  await http.put(`/api/project/${id}`, { credentials });

export const deleteProjectRequest = async id =>
  await http.delete(`/api/project/${id}`);
