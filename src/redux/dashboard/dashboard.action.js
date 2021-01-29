import LayoutActionTypes from "./dashboard.types";

export const setRecentProject = (recent_projects) => (dispatch) => {
  dispatch({
    type: LayoutActionTypes.SET_RECENT_PROJECT,
    payload: recent_projects,
  });
};

export const setRecentSurvey = (recent_surveys) => (dispatch) => {
  dispatch({
    type: LayoutActionTypes.SET_RECENT_SURVEY,
    payload: recent_surveys,
  });
};
