import { authenticationRequest, registrationRequest } from "../../api/auth";
import { decodeToken, encodeUserObject, setToken } from "../../api/helpers";
import { http } from "../../api/client";
import { AuthActionTypes } from "./auth.types";

export const register = (userData, history) => async (dispatch) => {
  try {
    dispatch({ type: AuthActionTypes.REQUEST_PROCESS });
    const {
      data: { token },
    } = await registrationRequest(userData);
    await setToken(token);
    http.defaults.headers.Authorization = `Bearer ${token}`;
    const user = decodeToken(token)._doc;
    await encodeUserObject(user);
    await dispatch({
      type: AuthActionTypes.REQUEST_SUCCESS,
      user,
    });
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: AuthActionTypes.REQUEST_ERROR,
      payload: error.response.data,
    });
  }
};

export const authenticate = (userData, history) => async (dispatch) => {
  try {
    dispatch({ type: AuthActionTypes.REQUEST_PROCESS });
    const {
      data: { token },
    } = await authenticationRequest(userData);
    await setToken(token);
    http.defaults.headers.Authorization = `Bearer ${token}`;
    const user = decodeToken(token)._doc;
    await encodeUserObject(user);
    await dispatch({
      type: AuthActionTypes.REQUEST_SUCCESS,
      user,
    });
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: AuthActionTypes.REQUEST_ERROR,
      payload: error.response.data,
    });
  }
};
