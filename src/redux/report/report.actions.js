import { getAllProjectsRequest, getSingleProjectRequest } from "../../api/project"
import ReportActionTypes from "./report.types";
import _ from 'lodash';

export const showAllProject = () => {
    return async (dispatch) => {
        const { data: { data } } = await getAllProjectsRequest();
        dispatch({
            type: ReportActionTypes.FETCH_ALL_REPORT,
            payload: data
        })
    }
}

export const getAProjectReport = (id) => {
    return async (dispatch) => {
        dispatch({
            type: ReportActionTypes.FETCH_A_SINGLE_REPORT,
            payload: id
        })
    }
}

// const _fetchAProject = _.memoize(async (dispatch, id) => {
//     console.log(id)
//     const { data: { data } } = await getSingleProjectRequest(id);
//     dispatch({
//         type: ReportActionTypes.FETCH_A_SINGLE_REPORT,
//         payload: data
//     })
// })

export const manageDescriptionTab = () => {
    return dispatch => {
        dispatch({
            type: ReportActionTypes.MANAGE_DESCRIPTION_TAB_DISPLAY
        })
    }
}

export const manageGoalsAndObjectiveTab = () => {
    return dispatch => {
        dispatch({
            type: ReportActionTypes.MANAGE_GOALS_AND_OBJECTIVE_TAB_DISPLAY
        })
    }
}

export const manageTeamMembersTab = () => {
    return dispatch => {
        dispatch({
            type: ReportActionTypes.MANAGE_TEAM_TAB_DISPLAY
        })
    }
}
export const manageDateAndMilestoneTab = () => {
    return dispatch => {
        dispatch({
            type: ReportActionTypes.MANAGE_DATE_AND_MILESTONE_TAB_DISPLAY
        })
    }
}

export const manageScopeTab = () => {
    return dispatch => {
        dispatch({
            type: ReportActionTypes.MANAGE_SCOPE_TAB_DISPLAY
        })
    }
}

export const manageExecutionPlanTab = () => {
    return dispatch => {
        dispatch({
            type: ReportActionTypes.MANAGE_EXECUTION_PLAN_TAB_DISPLAY
        })
    }
}

export const manageResourceRequirementTab = () => {
    return dispatch => {
        dispatch({
            type: ReportActionTypes.MANAGE_RESOURCE_REQUIREMENT_TAB_DISPLAY
        })
    }
}

export const manageBudgetTab = () => {
    return dispatch => {
        dispatch({
            type: ReportActionTypes.MANAGE_BUDGET_TAB_DISPLAY
        })
    }
}

export const manageSurveyInformationTab = () => {
    return dispatch => {
        dispatch({
            type: ReportActionTypes.MANAGE_SURVEY_INFORMATION_TAB_DISPLAY
        })
    }
}