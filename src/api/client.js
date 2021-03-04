import axios from "axios";
import { getToken } from "./helpers";

export const url = "https://limeapiv1.herokuapp.com";

let http;

(async () => {
  let Authorization;

  if (getToken()) {
    Authorization = { Authorization: `Bearer ${getToken()}` };
  }

  http = axios.create({
    baseURL: url,
    headers: { ...Authorization },
  });
})();

export { http };
