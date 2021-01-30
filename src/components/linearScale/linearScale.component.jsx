import shape from '@material-ui/core/styles/shape';
import React from 'react';
import CustomRadio from '../custom-radio/custom-radio.component';
import{
    MainContainer,
    TopContainer,
    RangeContainer,
    OptionContainer,
    InputContainer,
    LinearPreviewContainer,
    LinearRadioPreviewContainer,
    PreviewRadio,
    PreviewLabel
} from './linearScale.styles'

class LinearScale extends React.Component{
    constructor() {
        super();
        this.state = {};
    }
    setOption = (event)=>{
        const {id, value} = event.target
        let shape,setShape
        ({shape,setShape} = this.props);
        id === 'start'? (shape.range[0] = +value): (shape.range[1] = +value);
        setShape(shape)
    }
    setLabel = (event)=>{
        const {id, value} = event.target
        let shape,setShape
        ({shape,setShape} = this.props);
        id === 'start'? (shape.label[0] = value): (shape.label[1] = value);
        setShape(shape)
    }
    handleAnswer = (event)=>{
        const {questionNumber, setAnswer} = this.props
        const { value } = event.target;
        console.log(`Question ${questionNumber} is: ${[value]}`)
        setAnswer([+value])
    }
    setPreviewRadios = ()=>{
        const{shape, answerMode,responseMode, questionNumber, answer,handleAnswer} = this.props
        let previewRadios = []
        for(let index=shape.range[0]; index < shape.range[1] + 1; index++){
            previewRadios.push(
                <PreviewRadio key={index}>
                    <span>{index}</span>
                            {/* to make label and id vary, create a number out of question number and index */}
                            {/* if answerMode set disabled of input fields to false */}
                    <CustomRadio 
                        type="radio" 
                        disabled = {answerMode?false:true} 
                        value={index} 
                        name={`question${questionNumber}`} 
                        id={`${+(String(questionNumber) + String(index))}`}
                        onChange={(e)=>{this.handleAnswer(e)}} 
                        checked={ responseMode && answer[0] === index} 
                    ></CustomRadio>
                </PreviewRadio>
            )
        }
        return previewRadios
    }
    render(){
        const {shape,previewMode} = this.props
        return(
            <MainContainer>
                {
                    previewMode?
                    (
                        <LinearPreviewContainer>
                        <PreviewLabel>{shape.label[0]}</PreviewLabel>
                        <LinearRadioPreviewContainer>
                            {
                                this.setPreviewRadios()
                            }
                        </LinearRadioPreviewContainer>
                        <PreviewLabel>{shape.label[1]}</PreviewLabel>
                    </LinearPreviewContainer>
                    ):
                    (
                        <TopContainer>
                        <div className="">
                            <RangeContainer>
                                <select name="start" id="start" onChange = {this.setOption} value={shape.range[0]}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                </select>
                                <span>to</span>
                                <select name="end" id="end" onChange = {this.setOption} value={shape.range[1]}>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </RangeContainer>
                            <OptionContainer>
                                    <span>{shape.range[0]}</span>
                                    <InputContainer style={{borderBottom:'0.5px solid rgba(91, 86, 86, 0.5)'}} placeholder="Label (optional)" id="start" value={shape.label[0]} onChange = {this.setLabel}></InputContainer>
                            </OptionContainer>
                            <OptionContainer>
                                    <span>{shape.range[1]}</span>
                                    <InputContainer style={{borderBottom:'0.5px solid rgba(91, 86, 86, 0.5)'}} placeholder="Label (optional)" id="end" value={shape.label[1]} onChange = {this.setLabel}></InputContainer>
                            </OptionContainer>
                        </div>
                        </TopContainer>
                    )
                }

            </MainContainer>
        )
    }
}

export default LinearScale