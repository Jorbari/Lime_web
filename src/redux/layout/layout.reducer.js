import LayoutActionTypes from "./layout.types"

const INITIAL_STATE = {
    heading: '' 
}

export const layoutReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case LayoutActionTypes.SET_HEADING:
            return {
                ...state,
                heading: payload
            }
        default:
            return{
                ...state
            }
    }
}