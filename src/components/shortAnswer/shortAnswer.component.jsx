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
    handleAnswer = (event)=>{
        const {questionNumber, setAnswer} = this.props
        const { value } = event.target;
        console.log(`Question ${questionNumber} is: ${[value]}`)
        setAnswer([value])
    }
    render(){
        const {isOther} = this.state
        const {options,previewMode,answerMode,responseMode, answer} = this.props
        return(
            <MainContainer>
                <OptionContainer>
                    <InputContainer 
                        style={previewMode?null:{borderBottom:'0.5px solid rgba(91, 86, 86, 0.5)'}}
                        previewMode 
                        disabled = {answerMode?false:true} 
                        placeholder="Short Answer"
                        onChange={(e)=>{this.handleAnswer(e)}}
                        value = {responseMode? answer[0]:undefined}
                    ></InputContainer>
                </OptionContainer>
            </MainContainer>
        )
    }
}

export default ShortAnswer