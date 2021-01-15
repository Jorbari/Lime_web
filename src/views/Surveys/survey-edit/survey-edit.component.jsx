import React, { useState,useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SurveySideBar from "../../../components/survey-side-bar/survey-side-bar.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import FormBuilder from "../../../components/form-builder/form-builder.component";
import { updateQuestions } from '../../../redux/questions/questions.action'
import { setHeading } from '../../../redux/layout/layout.action'
import Notifier from "../../../components/Notifier/notifier.component"; 
import Spinner from '../../../components/spinner/spinner'; 
import {getSurveyQuestions} from "../../../api/survey";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {convertQuestions} from '../../../helpers/helper'
import {
    MainContainer,
    ButtonContainer,
    Eye,
    CaretDown,
    Nav,
    NavItem,
    FormBuilderContainer
  } from "./survey-edit.styles";

const EditSurvey = ({ updateQuestions, match,setHeading }) => {
    setHeading("Edit Survey")
    const [apiMessageFeedback, setApiMessageFeedback] = useState("");
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {

        const getSurveys = async()=>{
            console.log('i am here >>>>>>>>')
            setLoading(true)
            try{
                const {data:{data}} = await getSurveyQuestions(match.params.id)
                console.log(data);
                setQuestions(convertQuestions(data.question));
                setLoading(false)
            }
            catch(err){
                console.log(err)
                setLoading(false)
                setApiMessageFeedback("An Error Occured, Try again 😓")
                setOpen(true)
                setQuestions([])
            }
        }

        getSurveys();
        
    },[])
    useEffect(()=>{
        console.log(questions)
        updateQuestions(questions);
        return () => {
            updateQuestions([])
        }
    },[questions])

    const handleClick = () => {
        setOpen(false)
    };

    return (
        <MainContainer>
            <Notifier
                open={open}
                handleClick={() => handleClick()}
                message={apiMessageFeedback}
            />

            <ButtonContainer>
                <CustomButton primary>
                    <Eye></Eye>
                    <span>Preview</span>
                </CustomButton>
            </ButtonContainer>
            <Nav>
                <NavItem className = 'active'>Edit</NavItem>
            </Nav>
            {
                loading?
                (
                    <div className="" style = {{marginTop: "2rem"}}><Spinner showSpinner={true} radius = {'5rem'} /></div>
                ):
                (
                    <FormBuilderContainer>
                        <SurveySideBar></SurveySideBar>
                        <FormBuilder></FormBuilder>
                    </FormBuilderContainer>
                )
            }

        </MainContainer>
    );
};

export default connect(null, { updateQuestions, setHeading })(withRouter(EditSurvey));
