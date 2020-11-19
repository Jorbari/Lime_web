import {AuthActionTypes} from "./auth.types";


const DEFAULT_STATE = {
    error: {},
    isLoading: false,
    status: undefined,
    user: {}
};

export const authReducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case AuthActionTypes.REQUEST_PROCESS:
            return {
                ...state,
                isLoading: true,
                status: "loading",
                error: {}
            };
        case AuthActionTypes.REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                status: "success",
                user: payload,
                error: {}
            };
        case AuthActionTypes.REQUEST_ERROR:
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
