import React, { useState,useEffect } from 'react';
import {ReactComponent as Ellipsis} from '../../../assets/ellipsis-lg.svg'
import SurveyResponses from '../survey-responses/survey-responses.component'
import {selectResponseCount} from '../../../redux/survey/survey.selector'
import { createStructuredSelector } from "reselect";
import {connect} from 'react-redux'
import {
    Nav,
    NavItem,
    MainContainer,
    FlexContainer,
    Header
} from './survey-analyse.styles'

const SurveyAnalyse = (props)=>{
    const [isIndividual, setisIndividual] =  useState(false)
    const {responseCount} = props
    return(
        <MainContainer>
            <Header>
                <FlexContainer>
                    <p className="responses">{responseCount} Responses</p>
                    <div className="options">
                        <Ellipsis/>
                    </div>
                </FlexContainer>
                <Nav>
                    <NavItem className = {`${isIndividual? null : 'active'}`} onClick={()=>setisIndividual(false)}>Summary</NavItem>
                    <NavItem className = {`${isIndividual? 'active' : null}`} onClick={()=>setisIndividual(true)}>Individual</NavItem>
                </Nav>
            </Header>
            <SurveyResponses/>
        </MainContainer>
    )
}
const matchStateToProps = createStructuredSelector({
    responseCount: selectResponseCount
});
export default connect(matchStateToProps)(SurveyAnalyse);