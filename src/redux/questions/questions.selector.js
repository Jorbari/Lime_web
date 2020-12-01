import {createSelector} from 'reselect'

const selectQuestionState = (state)=>state.questionsState

export const selectQuestions = createSelector(
    [selectQuestionState],
    (questionState)=>questionState.questions
)

export const selectCurrentQuestionId = createSelector(
    [selectQuestionState],
    (questionState)=>questionState.currentId
)