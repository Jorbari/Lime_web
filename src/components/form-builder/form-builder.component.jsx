import React from 'react';
import {ReactComponent as AddCircleIcon} from '../../assets/add-with-circle.svg'
import CustomButton from '../custom-button/custom-button.component'
import{
    MainContainer,
} from './form-builder.styles'
const FormBuilder = ()=>{

    return(
        <MainContainer>
            <CustomButton spanWidth>
                <AddCircleIcon></AddCircleIcon>
                <span>Add Question</span>
            </CustomButton>
        </MainContainer>
    ) 
}

export default FormBuilder