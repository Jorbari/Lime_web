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
    AutoGrowInput,
    CloseButton,
} from './longAnswer.styles'


class LongAnswer extends React.Component{
    constructor() {
        super();
        this.state = {
            isOther: false,
        };
    }

    handleAnswer = (event)=>{
        const {questionNumber, setAnswer} = this.props
        const value = event.target.textContent;
        console.log(`Question ${questionNumber} is: ${[value]}`)
        setAnswer([value])
    }

    render(){
        const {isOther} = this.state
        const {options,previewMode,answerMode, responseMode, questionNumber, answer} = this.props
        return(
            <MainContainer>
                {
                    answerMode || responseMode?
                    (   
                        <div className="" style = {{background: 'rgba(247, 247, 247, 0.8)'}}>
                            <AutoGrowInput onInput={this.handleAnswer} role="textbox" contentEditable = {answerMode}>{answer[0]}</AutoGrowInput>
                        </div>
                    ):
                    (
                        <OptionContainer>
                        <InputContainer 
                            style={previewMode?null:{borderBottom:'0.5px solid rgba(91, 86, 86, 0.5)'}}
                            previewMode 
                            disabled = {answerMode?false:true} 
                            placeholder="Long Answer"
                            onChange={(e)=>{this.handleAnswer(e)}}
                        ></InputContainer>
                    </OptionContainer>
                    )
                }

            </MainContainer>
        )
    }
}

export default LongAnswer