import React, { useState } from 'react'
import CustomButton from '../../../components/custom-button/custom-button.component'
import SurveySideBar from '../../../components/survey-side-bar/survey-side-bar.component'
import FormBuilder from '../../../components/form-builder/form-builder.component'
import {
    MainContainer,
    ButtonContainer,
    Eye,
    CaretDown,
    Nav,
    NavItem,
    FormBuilderContainer
} from './survey-create.styles'


const CreateSurvey = ()=>{
    const [navItem, setNavItem] =  useState('create')
    const isNav = (value)=> value === navItem?'active':null;
    const setNav = (value)=>setNavItem(value)
    
    return(
        <MainContainer>
            <ButtonContainer>
                <CustomButton primary>
                    <Eye></Eye>
                    <span>Preview</span>
                </CustomButton>
                <CustomButton inverted>
                    <span>Add new</span>
                    <CaretDown></CaretDown>
                </CustomButton>
            </ButtonContainer>
            <Nav>
                <NavItem className = {isNav('create')} onClick={()=>setNav('create')}>Create</NavItem>
                <NavItem className = {isNav('share')} onClick={()=>setNav('share')}>Share</NavItem>
            </Nav>
            <FormBuilderContainer>
                <SurveySideBar></SurveySideBar>
                <FormBuilder></FormBuilder>
            </FormBuilderContainer>
        </MainContainer>
    )
}

export default CreateSurvey