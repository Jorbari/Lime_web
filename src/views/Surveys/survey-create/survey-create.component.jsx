import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CustomButton from "../../../components/custom-button/custom-button.component";
import SurveySideBar from "../../../components/survey-side-bar/survey-side-bar.component";
import FormBuilder from "../../../components/form-builder/form-builder.component";
import {
  MainContainer,
  ButtonContainer,
  Eye,
  CaretDown,
  FormBuilderContainer,
  Container,
} from "./survey-create.styles";
import ShareSurveyComponent from "./survey-share.component";

const CreateSurvey = () => {
  return (
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

      <Container>
        <Tabs>
          <TabList className="tab">
            <Tab className="tab__list">Create</Tab>
            <Tab className="tab__list">Share</Tab>
          </TabList>

          <TabPanel>
            <FormBuilderContainer>
              <SurveySideBar />
              <FormBuilder />
            </FormBuilderContainer>
          </TabPanel>
          <TabPanel>
            <ShareSurveyComponent />
          </TabPanel>
        </Tabs>
      </Container>
    </MainContainer>
  );
};

export default CreateSurvey;
