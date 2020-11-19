import {
    createProjectRequest,
    deleteProjectRequest,
    editProjectRequest,
    getAllProjectsRequest,
    getSingleProjectRequest
} from "../../api/project";
import {ProjectActionTypes} from "./project.types";

export const createProject = (
    projectData,
    history,
    toggleNewProjectView,
    projects
) => async dispatch => {
    try {
        dispatch({type: ProjectActionTypes.REQUEST_PROCESS});
        const {
            data: {data}
        } = await createProjectRequest(projectData);
        projects.push(data);
        await dispatch({
            type: ProjectActionTypes.MODIFY_PROJECT_REQUEST_SUCCESS,
            payload: {project: data, projects}
        });
        history.push("/projects");
        toggleNewProjectView();
    } catch (error) {
        dispatch({type: ProjectActionTypes.REQUEST_ERROR, payload: error.response.data});
    }
};

export const editProject = (
    projectId,
    projectData,
    history,
    projects
) => async dispatch => {
    try {
        dispatch({type: ProjectActionTypes.REQUEST_PROCESS});
        const {
            data: {data}
        } = await editProjectRequest(projectId, projectData);

        let itemIndex;
        projects.forEach((item, index) => {
            if (item._id === projectId) return (itemIndex = index);
        });
        projects.splice(itemIndex, 0, data);

        await dispatch({
            type: ProjectActionTypes.MODIFY_PROJECT_REQUEST_SUCCESS,
            payload: {project: data, projects}
        });
        history.push("/projects");
    } catch (error) {
        dispatch({type: ProjectActionTypes.REQUEST_ERROR, payload: error.response.data});
    }
};

export const deleteProject = (
    projectId,
    history,
    projects
) => async dispatch => {
    try {
        dispatch({type: ProjectActionTypes.REQUEST_PROCESS});
        await deleteProjectRequest(projectId);
        const newProjects = projects.filter(item => item._id !== projectId);
        await dispatch({
            type: ProjectActionTypes.PROJECTS_REQUEST_SUCCESS,
            payload: newProjects
        });
        history.push("/projects");
    } catch (error) {
        dispatch({type: ProjectActionTypes.REQUEST_ERROR, payload: error.response.data});
    }
};

export const getAllProjects = () => async dispatch => {
    try {
        dispatch({type: ProjectActionTypes.REQUEST_PROCESS});
        const {
            data: {data}
        } = await getAllProjectsRequest();
        await dispatch({
            type: ProjectActionTypes.PROJECTS_REQUEST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({type: ProjectActionTypes.REQUEST_ERROR, payload: error.response.data});
    }
};

export const getSingleProject = id => async dispatch => {
    try {
        dispatch({type: ProjectActionTypes.REQUEST_PROCCESS});
        const {
            data: {data}
        } = await getSingleProjectRequest(id);
        await dispatch({
            type: ProjectActionTypes.PROJECT_REQUEST_SUCCESS,
            payload: data.find(item => item._id === id)
        });
    } catch (error) {
        dispatch({type: ProjectActionTypes.REQUEST_ERROR, payload: error.response.data});
    }
};