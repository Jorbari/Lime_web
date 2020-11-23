import React from 'react';
import * as Style from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => {
    return (
        <Style.CustomButtonContainer {...otherProps}>
            {children}
        </Style.CustomButtonContainer>
    )
}

export default CustomButton