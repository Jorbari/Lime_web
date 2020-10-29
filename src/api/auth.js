import { http } from "./client";

export const registrationRequest = async credentials =>
  await http.post("/signup", credentials);
export const authenticationRequest = async credentials =>
  await http.post("/login", credentials);
