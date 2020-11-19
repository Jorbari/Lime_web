import {ProjectActionTypes} from "./project.types";

const DEFAULT_STATE = {
    error: {},
    isLoading: false,
    status: undefined,
    project: {},
    projects: []
};

export const projectReducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case ProjectActionTypes.REQUEST_PROCESS:
            return {
                ...state,
                isLoading: true,
                status: "loading"
            };
        case ProjectActionTypes.MODIFY_PROJECT_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                status: "success",
                projects: payload.projects,
                project: payload.project
            };

        case ProjectActionTypes.PROJECT_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                status: "success",
                project: payload
            };

        case ProjectActionTypes.PROJECTS_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                status: "success",
                projects: payload
            };
        case ProjectActionTypes.REQUEST_ERROR:
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
