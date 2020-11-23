import React from 'react';
import {ReactComponent as AddCircleIcon} from '../../assets/add-with-circle.svg'
import { selectQuestions } from '../../redux/questions/questions.selector';
import { addQuestion } from '../../redux/questions/questions.action';
import CustomButton from '../custom-button/custom-button.component'
import Question from '../question/question.component';
import { createStructuredSelector } from "reselect";
import {connect} from 'react-redux'
import{
    MainContainer,
} from './form-builder.styles'
const FormBuilder = (props)=>{
    const {questions, addQuestion} = props
    console.log(props)
    return(
        <MainContainer>
                {
                    questions.map((question, index) =>(
                        <Question key={index} {...question} questionNumber={index}></Question>
                    ))
                }
                
            <CustomButton spanWidth onClick = {addQuestion}>
                <AddCircleIcon></AddCircleIcon>
                <span>Add Question</span>
            </CustomButton>
        </MainContainer>
    )
}
const matchStateToProps = createStructuredSelector({
    questions: selectQuestions,
});
  
export default connect(matchStateToProps,{addQuestion})(FormBuilder)