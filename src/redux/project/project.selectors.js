import { createSelector } from "reselect";

const selectProject = (state) => state.project;

export const selectSingleProject = createSelector(
    [selectProject],
    (state)=>state.project
)