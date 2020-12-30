import React from 'react';
import CustomRadio from '../custom-radio/custom-radio.component';
import {ReactComponent as CloseIcon} from '../../assets/close-btn.svg'
import{
    MainContainer,
    OptionsContainer,
    OptionContainer,
    InputContainer,
    AddOptionButton,
    AddOtherButton,
    CloseButton,
} from './shortAnswer.styles'


class ShortAnswer extends React.Component{
    constructor() {
        super();
        this.state = {
            isOther: false,
        };
    }

    render(){
        const {isOther} = this.state
        const {options,previewMode} = this.props
        return(
            <MainContainer>
                <OptionContainer>
                    <InputContainer style={previewMode?null:{borderBottom:'0.5px solid rgba(91, 86, 86, 0.5)'}}previewMode disabled placeholder="Short Answer"></InputContainer>
                </OptionContainer>
            </MainContainer>
        )
    }
}

export default ShortAnswer