import React, { useState,useEffect } from "react";
import { 
    MainContainer,
    QuestionContainer,
    ButtonContainer,
    HeadingCard,
    Heading,
    Brief
 } from "./display-survey.styles";
 import { updateQuestions } from '../../redux/questions/questions.action'
 import CustomButton from "../custom-button/custom-button.component";
import Notifier from "../Notifier/notifier.component";  
import Question from "../question/question.component";
import {convertQuestions} from '../../helpers/helper'
import {getSurveyQuestions,createSurveyResponse} from "../../api/survey";
import { withRouter } from "react-router-dom";
import Spinner from '../spinner/spinner'; 
import {connect} from 'react-redux'

const DisplaySurvey = (props) => {
    const [apiMessageFeedback, setApiMessageFeedback] = useState("");
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [refArray, setrefArray] = useState([]);
    const {match,updateQuestions} = props;

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
        setArrayOfReferences();
        return () => {
            updateQuestions([])
        }
    },[questions])

    const handleClick = () => {
        setOpen(false)
    };

    const setArrayOfReferences = ()=>{
        let newrefArray = questions.map((question, index) => {
          if (refArray[index]) {
            return refArray[index];
          } else {
            return React.createRef();
          }
        });
        setrefArray(newrefArray)
    }
    const isValid = (arr)=>{
        for(let value of arr){
            if (value.isRequired && value.responseValue.length < 1){
                return false
            }
        }
        return true
    }
    const fetchAllChildState = async() => {
        let response = []
        refArray.forEach((questionRef)=>{
          let answer = {
            isRequired: questionRef.state.required,
            responseValue: questionRef.state.answer
          }
          response.push(answer)
        })
        if (isValid(response)){
            setSubmitting(true)
            let responseBody = {
                collectionMethod: "liveSurvey",
                location:"Abuja",
                note: "This is not required",
                response
            }
            // console.log(this.props.match.params.id,questions)
            const {match,history} = props
            try{
                const data = await createSurveyResponse(match.params.id,responseBody);
                setApiMessageFeedback("Your Response has been recoreded successfully")
                setOpen(true)
                setSubmitting(false)
                history.push("/survey-done")
            }
            catch (error) {
              console.log(error.response)            
              setApiMessageFeedback("Failed to record your response, pls try again 😓") 
              setOpen(true)
              setSubmitting(false)
            }
        }
        else{
            setApiMessageFeedback("Pls fill all the required fields and try again ⚠") 
            setOpen(true)
        }

    };
    return (
        <>
      <MainContainer>
            <Notifier
            open={open}
            handleClick={() => handleClick()}
            message={apiMessageFeedback}
            />
                        {
                loading?
                (
                    <div className="" style = {{marginTop: "2rem"}}><Spinner showSpinner={true} radius = {'5rem'} /></div>
                ):
                (
                    <div className="">
                        <HeadingCard>
                            <Heading>Lime Survey</Heading>
                            <Brief>This Survey was created on the lime platform pls fill the required fields and hit the submit button to finish</Brief>
                        </HeadingCard>
                        <QuestionContainer>
                            {questions.map((question, index) => (
                                <Question
                                    onRef={(ref) => (refArray[index] = ref)}
                                    key={index}
                                    {...question}
                                    previewMode = {true}
                                    answerMode = {true}
                                    preview={true}
                                    questionNumber={index}
                                ></Question>
                            ))}
                        </QuestionContainer>
                        <ButtonContainer>
                            <CustomButton primary onClick={fetchAllChildState}>
                            <span>Submit</span>  
                            {
                                submitting?
                                (
                                <span><Spinner showSpinner={true} radius = {'2rem'} /></span>
                                ):
                                null
                            }
                            </CustomButton>
                        </ButtonContainer>
                    </div>
                )
            }

        </MainContainer>
        </> 
    );
}

export default connect(null,{updateQuestions})(withRouter(DisplaySurvey));