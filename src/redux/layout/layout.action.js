import LayoutActionTypes from'./layout.types';

export const setHeading = (heading) => dispatch => {
    dispatch({ type: LayoutActionTypes.SET_HEADING, payload:heading });
}