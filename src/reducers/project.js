import {
  createProjectRequest,
  getAllProjectsRequest,
  getSingleProjectRequest,
  editProjectRequest,
  deleteProjectRequest
} from "../../src/api/project";

const REQUEST_PROCCESS = "REQUEST_PROCCESS";
const REQUEST_ERROR = "REQUEST_ERROR";
const PROJECTS_REQUEST_SUCCESS = "PROJECTS_REQUEST_SUCCESS";
const PROJECT_REQUEST_SUCCESS = "PROJECT_REQUEST_SUCCESS";
const MODIFY_PROJECT_REQUEST_SUCCESS = "MODIFY_PROJECT_REQUEST_SUCCESS";

export const createProject = (
  projectData,
  history,
  toggleNewProjectView,
  projects
) => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    const {
      data: { data }
    } = await createProjectRequest(projectData);
    projects.push(data);
    await dispatch({
      type: MODIFY_PROJECT_REQUEST_SUCCESS,
      payload: { project: data, projects }
    });
    history.push("/projects");
    toggleNewProjectView();
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

export const editProject = (
  projectId,
  projectData,
  history,
  projects
) => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    const {
      data: { data }
    } = await editProjectRequest(projectId, projectData);

    let itemIndex;
    projects.forEach((item, index) => {
      if (item._id === projectId) return (itemIndex = index);
    });
    projects.splice(itemIndex, 0, data);

    await dispatch({
      type: MODIFY_PROJECT_REQUEST_SUCCESS,
      payload: { project: data, projects }
    });
    history.push("/projects");
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

export const deleteProject = (
  projectId,
  history,
  projects
) => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    await deleteProjectRequest(projectId);
    const newProjects = projects.filter(item => item._id !== projectId);
    await dispatch({
      type: PROJECTS_REQUEST_SUCCESS,
      payload: newProjects
    });
    history.push("/projects");
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

export const getAllProjects = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    const {
      data: { data }
    } = await getAllProjectsRequest();
    await dispatch({
      type: PROJECTS_REQUEST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

export const getSingleProject = id => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCCESS });
    const {
      data: { data }
    } = await getSingleProjectRequest(id);
    await dispatch({
      type: PROJECT_REQUEST_SUCCESS,
      payload: data.find(item => item._id === id)
    });
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

const DEFAULT_STATE = {
  error: {},
  isLoading: false,
  status: undefined,
  project: {},
  projects: []
};

export const projectReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case REQUEST_PROCCESS:
      return {
        ...state,
        isLoading: true,
        status: "loading"
      };
    case MODIFY_PROJECT_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: "success",
        projects: payload.projects,
        project: payload.project
      };

    case PROJECT_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: "success",
        project: payload
      };

    case PROJECTS_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: "success",
        projects: payload
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
