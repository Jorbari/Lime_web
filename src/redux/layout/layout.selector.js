import {createSelector} from 'reselect'

const selectLayoutState = (state)=>state.layout

export const selectHeading = createSelector(
    [selectLayoutState],
    (layout)=>layout.heading
)
