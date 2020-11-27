import { createSelector } from "reselect"

const selectReport = state => state.report

export const selectAllReport = createSelector([selectReport], report => report.all_reports)

export const selectCurrentReport = createSelector([selectReport], report => report.current_report)