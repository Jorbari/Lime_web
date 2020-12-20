import { http } from "./client";

export const updateUserDetails = async (userInfo) =>
  await http.put("/api/user", userInfo);
