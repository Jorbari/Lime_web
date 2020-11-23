import React from 'react';
import { Form } from "react-bootstrap";
import{
    MainContainer,
    ContentHeader,
    SectionContainer,
    SectionHeading
} from '../design/design.styles'
import{
    Section,
    Switch,
    SwitchInput,
    SwitchSlider,
    SectionForm,
    ConfirmationInput
} from './survey-settings.styles'

const SurveySettings = ()=>{

    return(
        <MainContainer>
            <ContentHeader>
                <h4 className="heading__4">Settings</h4>
                <span>
                    <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM19 5.25L1 5.25V6.75L19 6.75V5.25Z" fill="#5B5656"/>
                    </svg>
                </span>
            </ContentHeader>
            <SectionContainer>
                <Section>
                    <span>Progress bar</span>
                    <Switch>
                        <SwitchInput type="checkbox"></SwitchInput>
                        <SwitchSlider className="slider"></SwitchSlider>
                    </Switch>
                </Section>
                <Section>
                    <span>Shuffle question order </span>
                    <Switch>
                        <SwitchInput type="checkbox"></SwitchInput>
                        <SwitchSlider className="slider"></SwitchSlider>
                    </Switch>
                </Section>
                <Section>
                    <span>Collect email </span>
                    <Switch>
                        <SwitchInput type="checkbox"></SwitchInput>
                        <SwitchSlider className="slider"></SwitchSlider>
                    </Switch>
                </Section>
                <Section>
                    <span>Show numbers </span>
                    <Switch>
                        <SwitchInput type="checkbox"></SwitchInput>
                        <SwitchSlider className="slider"></SwitchSlider>
                    </Switch>
                </Section>
                <Section>
                    <span>Show unique value code </span>
                    <Switch>
                        <SwitchInput type="checkbox"></SwitchInput>
                        <SwitchSlider className="slider"></SwitchSlider>
                    </Switch>
                </Section>
                <SectionForm>
                    <SectionHeading>Confirmation message</SectionHeading>
                    <ConfirmationInput value="Thank you for your response"></ConfirmationInput>
                </SectionForm>
            </SectionContainer>
        </MainContainer>
    )
}

export default SurveySettings