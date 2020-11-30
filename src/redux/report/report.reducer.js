import ReportActionTypes from "./report.types"
import { fetchASingleReport } from "./report.utils";

const INITIAL_STATE = {
    all_reports: [],
    current_report: {},
    is_rendered: {
        description: false,
        goals_and_objective: false,
        team_members: false,
        date_and_milestone: false,
        scope: false,
        execution_plan: false,
        resource_requirement: false,
        budget: false,
        survey_information: false
    },
}

const reportReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ReportActionTypes.FETCH_ALL_REPORT:
            return { ...state, all_reports: payload };

        case ReportActionTypes.FETCH_A_SINGLE_REPORT:
            return {
                ...state, current_report: fetchASingleReport(payload, state.all_reports), is_rendered:
                {
                    ...state.is_rendered,
                    description: false,
                    goals_and_objective: false,
                    team_members: false,
                    date_and_milestone: false,
                    scope: false,
                    execution_plan: false,
                    resource_requirement: false,
                    budget: false,
                    survey_information: false
                }
            };

        case ReportActionTypes.MANAGE_DESCRIPTION_TAB_DISPLAY:
            return { ...state, is_rendered: { ...state.is_rendered, description: !state.is_rendered.description } };

        case ReportActionTypes.MANAGE_GOALS_AND_OBJECTIVE_TAB_DISPLAY:
            return { ...state, is_rendered: { ...state.is_rendered, goals_and_objective: !state.is_rendered.goals_and_objective } };

        case ReportActionTypes.MANAGE_TEAM_TAB_DISPLAY:
            return { ...state, is_rendered: { ...state.is_rendered, team_members: !state.is_rendered.team_members } };

        case ReportActionTypes.MANAGE_DATE_AND_MILESTONE_TAB_DISPLAY:
            return { ...state, is_rendered: { ...state.is_rendered, date_and_milestone: !state.is_rendered.date_and_milestone } };

        case ReportActionTypes.MANAGE_SCOPE_TAB_DISPLAY:
            return { ...state, is_rendered: { ...state.is_rendered, scope: !state.is_rendered.scope } };

        case ReportActionTypes.MANAGE_EXECUTION_PLAN_TAB_DISPLAY:
            return { ...state, is_rendered: { ...state.is_rendered, execution_plan: !state.is_rendered.execution_plan } };

        case ReportActionTypes.MANAGE_RESOURCE_REQUIREMENT_TAB_DISPLAY:
            return { ...state, is_rendered: { ...state.is_rendered, resource_requirement: !state.is_rendered.resource_requirement } };

        case ReportActionTypes.MANAGE_BUDGET_TAB_DISPLAY:
            return { ...state, is_rendered: { ...state.is_rendered, budget: !state.is_rendered.budget } };

        case ReportActionTypes.MANAGE_SURVEY_INFORMATION_TAB_DISPLAY:
            return { ...state, is_rendered: { ...state.is_rendered, survey_information: !state.is_rendered.survey_information } };

        default:
            return state
    }
}

export default reportReducer