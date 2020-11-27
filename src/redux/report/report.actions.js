import { getAllProjectsRequest } from "../../api/project"
import ReportActionTypes from "./report.types";

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