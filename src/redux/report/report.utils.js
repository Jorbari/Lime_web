export const fetchASingleReport = (id, all_reports) => {
    return all_reports.find(report => report._id === id)
}