import LayoutActionTypes from "./dashboard.types";

const INITIAL_STATE = {
  recent_projects: 0,
  recent_surveys: 0,
};

export const dashboardReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LayoutActionTypes.SET_RECENT_PROJECT:
      return {
        ...state,
        recent_projects: payload,
      };
    case LayoutActionTypes.SET_RECENT_SURVEY:
      return {
        ...state,
        recent_surveys: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
