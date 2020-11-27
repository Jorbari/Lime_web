import ReportActionTypes from "./report.types"
import { fetchASingleReport } from "./report.utils";

const INITIAL_STATE = {
    all_reports: [],
    current_report: {},
    is_rendered: {
        description: false,
        goals_and_objective: false,
        scope: false
    },
}

const reportReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ReportActionTypes.FETCH_ALL_REPORT:
            return { ...state, all_reports: payload };
        case ReportActionTypes.FETCH_A_SINGLE_REPORT:
            return { ...state, current_report: fetchASingleReport(payload, state.all_reports) }
        default:
            return state
    }
}

export default reportReducer