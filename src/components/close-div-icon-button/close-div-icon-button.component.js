import React from 'react'
import * as Style from './close-div-icon-button.styles'
const CloseDivButton = ({ ...allProps }) => {
    return (
        <Style.CloseDivButtonContainer {...allProps}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M9.5 0.96875C4.796 0.96875 0.96875 4.796 0.96875 9.5C0.96875 14.204 4.796 18.0312 9.5 18.0312C14.204 18.0312 18.0312 14.204 18.0312 9.5C18.0312 4.796 14.204 0.96875 9.5 0.96875ZM9.5 2.28125C13.4946 2.28125 16.7188 5.50541 16.7188 9.5C16.7188 13.4946 13.4946 16.7188 9.5 16.7188C5.50541 16.7188 2.28125 13.4946 2.28125 9.5C2.28125 5.50541 5.50541 2.28125 9.5 2.28125ZM7.01938 6.07437L6.07437 7.01938L8.55763 9.5L6.07569 11.9806L7.02069 12.9256L9.5 10.443L11.9806 12.9237L12.9256 11.9806L10.443 9.5L12.9237 7.01938L11.9806 6.07437L9.5 8.55763L7.01938 6.07569V6.07437Z" fill="rgba(220, 67, 67, 1)">
                </path>
            </svg>
        </Style.CloseDivButtonContainer>
    )
}
export default CloseDivButton