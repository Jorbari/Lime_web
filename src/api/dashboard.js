import { http } from "./client";

export const updateUserDetails = async () =>
  await http.get("/api/response/responserate");
