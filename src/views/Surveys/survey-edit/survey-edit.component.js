import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CustomButton from "../../../components/custom-button/custom-button.component";
import SurveySideBar from "../../../components/survey-side-bar/survey-side-bar.component";
import FormBuilder from "../../../components/form-builder/form-builder.component";
import { updateQuestion } from '../../../redux/questions/questions.action'
import {
    MainContainer,
    ButtonContainer,
    Eye,
    CaretDown,
    FormBuilderContainer,
    Container,
} from "./survey-edit.styles";
import { connect } from "react-redux";

const EditSurvey = ({ updateQuestion }) => {
    const dataTest = [
        {
            format: "multichoice",
            previewMode: false,
            required: true,
            shape: ["Option 1"],
            title: "first title",
            isEdit: true
        },
        {
            format: "multichoice",
            previewMode: false,
            required: false,
            shape: ["Option 2"],
            title: "second title",
            isEdit: true
        },
        {
            format: "multichoice",
            previewMode: false,
            required: false,
            shape: ["Option 3"],
            title: "third title",
            isEdit: true
        },
    ];
    useEffect(() => {
        updateQuestion(dataTest);
        return () => {
            updateQuestion([])
        }
    })

    return (
        <MainContainer>
            <ButtonContainer>
                <CustomButton primary>
                    <Eye></Eye>
                    <span>Preview</span>
                </CustomButton>
            </ButtonContainer>

            <Container>
                <Tabs>
                    <TabList className="tab">
                        <Tab className="tab__list">Edit</Tab>
                    </TabList>

                    <TabPanel>
                        <FormBuilderContainer>
                            <SurveySideBar />
                            <FormBuilder />
                        </FormBuilderContainer>
                    </TabPanel>
                </Tabs>
            </Container>
        </MainContainer>
    );
};

export default connect(null, { updateQuestion })(EditSurvey);
