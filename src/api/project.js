import { http } from "./client";

export const createProjectRequest = async credentials =>
  await http.post("/project", credentials);

export const getAllProjectsRequest = async () => await http.get("/project");

export const getSingleProjectRequest = async id =>
  await http.get(`/project/${id}`);

export const editProjectRequest = async (id, credentials) =>
  await http.put(`/project/${id}`, { credentials });

export const deleteProjectRequest = async id =>
  await http.delete(`/project/${id}`);
