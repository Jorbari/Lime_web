import {createSelector} from 'reselect'

export const selectSurveyState = (state)=>state.survey

export const selectResponseCount = createSelector(
    [selectSurveyState],
    (surveyState)=>surveyState.responseCount
)
