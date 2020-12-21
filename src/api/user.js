import { http } from "./client";

export const updateUserDetails = async (userInfo) =>
  await http.put("/api/user", userInfo);

export const updateUserProfileImage = async (imageBinary) =>
  await http.post("/api/upload", imageBinary);
