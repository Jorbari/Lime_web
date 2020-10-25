import axios from "axios";
import { getToken } from "./helpers";

let http;

(async () => {
  let Authorization;

  if (getToken()) {
    Authorization = { Authorization: `Bearer ${getToken()}` };
  }

  http = axios.create({
    baseURL: "https://limeapiv1.herokuapp.com",
    headers: { ...Authorization }
  });
})();

export { http };
