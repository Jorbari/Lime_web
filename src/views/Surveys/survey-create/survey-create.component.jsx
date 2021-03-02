import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SurveySideBar from "../../../components/survey-side-bar/survey-side-bar.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import FormBuilder from "../../../components/form-builder/form-builder.component";
import Question from "../../../components/question/question.component";
import { setHeading } from '../../../redux/layout/layout.action';
import { selectQuestions } from '../../../redux/questions/questions.selector';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import {
  MainContainer,
  ButtonContainer,
  Eye,
  CaretDown,
  Nav,
  NavItem,
  FormBuilderContainer,
  QuestionContainer
} from "./survey-create.styles";
import ShareSurveyComponent from "./survey-share.component";

const CreateSurvey = ({questions, setHeading}) => {
  setHeading("New Survey")
  const [navItem, setNavItem] =  useState('create')
  const isNav = (value)=> value === navItem?'active':null;
  const setNav = (value)=>setNavItem(value)
  
  return(
      <MainContainer>
          <ButtonContainer>
              <CustomButton primary onClick={()=>setNav('preview')}>
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
          {
            {
              'create':(
                <FormBuilderContainer>
                  <SurveySideBar></SurveySideBar>
                  <FormBuilder></FormBuilder>
                </FormBuilderContainer>
              ),
              'share':(
                <ShareSurveyComponent />
              ),
              'preview':(
                <QuestionContainer>
                  {
                    questions.length?
                    (
                      questions.map((question, index) => (
                        <Question
                            onRef={(ref) => (null)}
                            key={index}
                            {...question}
                            previewMode = {true}
                            preview={true}
                            questionNumber={index}
                        ></Question>
                    ))
                    ):
                    (
                      
                      <h4 style={{textAlign:'center'}}>No Question to preview</h4>
                    )
                  }
                </QuestionContainer>
              )
            }[navItem]
          }
      </MainContainer>
  )
};
const mapStateToProps = createStructuredSelector({
  questions: selectQuestions,
});
export default connect(mapStateToProps,{setHeading})(CreateSurvey);
