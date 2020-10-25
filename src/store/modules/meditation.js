import { toast } from "react-toastify";

import {
  getAllMeditationsRequest,
  deleteMeditationRequest,
  deleteAllMeditationsRequest,
  editMeditationRequest,
  createMeditationRequest
} from "../../api/meditation";

const GET_MEDITATIONS_PROCESS = "GET_MEDITATIONS_PROCESS";
const GET_MEDITATIONS_SUCCESS = "GET_MEDITATIONS_SUCCESS";
const GET_MEDITATIONS_ERROR = "GET_MEDITATIONS_ERROR";

const DELETE_MEDITATION_PROCESS = "DELETE_MEDITATION_PROCESS";
const DELETE_MEDITATION_SUCCESS = "DELETE_MEDITATION_SUCCESS";
const DELETE_MEDITATION_ERROR = "DELETE_MEDITATION_ERROR";

const DELETE_ALL_MEDITATIONS_PROCESS = "DELETE_ALL_MEDITATIONS_PROCESS";
const DELETE_ALL_MEDITATIONS_SUCCESS = "DELETE_ALL_MEDITATIONS_SUCCESS";
const DELETE_ALL_MEDITATIONS_ERROR = "DELETE_ALL_MEDITATIONS_ERROR";

const EDIT_MEDITATION_PROCESS = "EDIT_MEDITATION_PROCESS";
const EDIT_MEDITATION_SUCCESS = "EDIT_MEDITATION_SUCCESS";
const EDIT_MEDITATION_ERROR = "EDIT_MEDITATION_ERROR";

const CREATE_MEDITATION_PROCESS = "CREATE_MEDITATION_PROCESS";
const CREATE_MEDITATION_SUCCESS = "CREATE_MEDITATION_SUCCESS";
const CREATE_MEDITATION_ERROR = "CREATE_MEDITATION_ERROR";

export const getMeditations = () => async dispatch => {
  try {
    dispatch({ type: GET_MEDITATIONS_PROCESS });
    const {
      data: { meditations }
    } = await getAllMeditationsRequest();
    dispatch({ type: GET_MEDITATIONS_SUCCESS, payload: meditations });
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    dispatch({ type: GET_MEDITATIONS_ERROR, payload: error.response.data });
  }
};

export const deleteMeditation = (id, meditations) => async dispatch => {
  try {
    dispatch({ type: DELETE_MEDITATION_PROCESS });
    const newMeditations = meditations.filter(
      meditation => meditation._id !== id
    );
    await deleteMeditationRequest(id);
    dispatch({ type: DELETE_MEDITATION_SUCCESS, payload: newMeditations });
    toast.success("Meditation successfully deleted");
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    dispatch({ type: DELETE_MEDITATION_ERROR, payload: error.response.data });
  }
};

export const deleteAllMeditations = () => async dispatch => {
  try {
    dispatch({ type: DELETE_ALL_MEDITATIONS_PROCESS });
    await deleteAllMeditationsRequest();
    dispatch({ type: DELETE_ALL_MEDITATIONS_SUCCESS, payload: [] });
    toast.success("All meditations have been successfully deleted");
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    dispatch({
      type: DELETE_ALL_MEDITATIONS_ERROR,
      payload: error.response.data
    });
  }
};

export const editMeditation = (
  meditation,
  meditations,
  meditationId
) => async dispatch => {
  try {
    dispatch({ type: EDIT_MEDITATION_PROCESS });
    const {
      data: { meditation: editedMeditation }
    } = await editMeditationRequest(meditationId, meditation);
    let meditationIndex;
    meditations.find((element, index) => {
      if (element._id === meditationId) return (meditationIndex = index);
    });
    meditations.splice(meditationIndex, 1, editedMeditation);
    dispatch({ type: EDIT_MEDITATION_SUCCESS, payload: meditations });
    toast.success("Meditation successfully edited");
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    dispatch({ type: EDIT_MEDITATION_ERROR, payload: error.response.data });
  }
};

export const createMeditation = (meditation, meditations) => async dispatch => {
  try {
    dispatch({ type: CREATE_MEDITATION_PROCESS });
    const { data } = await createMeditationRequest(meditation);
    meditations.unshift(data.meditation);
    dispatch({ type: CREATE_MEDITATION_SUCCESS, payload: meditations });
    toast.success("Meditation successfully created");
  } catch (error) {
    toast.error(`${error.response.data.message}`);
    dispatch({ type: CREATE_MEDITATION_ERROR, payload: error.response.data });
  }
};

const DEFAULT_STATE = {
  isLoading: false,
  meditations: [],
  error: {}
};

export const meditationReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case GET_MEDITATIONS_PROCESS:
    case DELETE_MEDITATION_PROCESS:
    case CREATE_MEDITATION_PROCESS:
    case EDIT_MEDITATION_PROCESS:
    case DELETE_ALL_MEDITATIONS_PROCESS:
      return {
        ...state,
        isLoading: true
      };
    case GET_MEDITATIONS_SUCCESS:
    case DELETE_MEDITATION_SUCCESS:
    case CREATE_MEDITATION_SUCCESS:
    case EDIT_MEDITATION_SUCCESS:
    case DELETE_ALL_MEDITATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        meditations: payload,
        error: {}
      };
    case GET_MEDITATIONS_ERROR:
    case DELETE_MEDITATION_ERROR:
    case CREATE_MEDITATION_ERROR:
    case EDIT_MEDITATION_ERROR:
    case DELETE_ALL_MEDITATIONS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    default:
      return state;
  }
};
