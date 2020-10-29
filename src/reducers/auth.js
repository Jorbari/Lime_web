import { authenticationRequest, registrationRequest } from "../../src/api/auth";

import { setToken, encodeUserObject, decodeToken } from "../../src/api/helpers";
import { http } from "../../src/api/client";

const REQUEST_PROCCESS = "REQUEST_PROCCESS";
const REQUEST_ERROR = "REQUEST_ERROR";
const REQUEST_SUCCESS = "REQUEST_SUCCESS";

export const register = (userData, history) => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    const {
      data: { token }
    } = await registrationRequest(userData);
    await setToken(token);
    http.defaults.headers.Authorization = `Bearer ${token}`;
    const user = decodeToken(token)._doc;
    await encodeUserObject(user);
    await dispatch({
      type: REQUEST_SUCCESS,
      user
    });
    history.push("/dashboard");
  } catch (error) {
    console.log(error);
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

export const authenticate = (userData, history) => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    const {
      data: { token }
    } = await authenticationRequest(userData);
    await setToken(token);
    http.defaults.headers.Authorization = `Bearer ${token}`;
    const user = decodeToken(token)._doc;
    await encodeUserObject(user);
    await dispatch({
      type: REQUEST_SUCCESS,
      user
    });
    history.push("/dashboard");
  } catch (error) {
    console.log(error);
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

const DEFAULT_STATE = {
  error: {},
  isLoading: false,
  status: undefined,
  user: {}
};

export const authReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case REQUEST_PROCCESS:
      return {
        ...state,
        isLoading: true,
        status: "loading"
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: "success",
        user: payload
      };
    case REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        status: "error",
        error: payload
      };
    default:
      return state;
  }
};
