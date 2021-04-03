import { http } from "./client";

export const createCollector = async (payload) =>
  await http.post("/api/mobile/create", payload);

export const getCollectors = async () => await http.get(`/api/mobile/users`);

export const getCollectorProject = async (id) =>
  await http.get(`/api/mobile/users/${id}/projects`);
