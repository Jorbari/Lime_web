import React, { useState,useEffect } from "react";
import { updateQuestions } from '../../redux/questions/questions.action'
import {convertQuestions} from '../../helpers/helper'
import { MainContainer,QuestionContainer } from "./survey-preview.styles";
import Notifier from "../Notifier/notifier.component";  
import Question from "../question/question.component";
import {getSurveyQuestions} from "../../api/survey";
import { withRouter } from "react-router-dom";
import Spinner from '../spinner/spinner'; 
import {connect} from 'react-redux'
const SurveyPreview = ({match,updateQuestions}) => {
    const [apiMessageFeedback, setApiMessageFeedback] = useState("");
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {

        const getSurveys = async()=>{
            setLoading(true)
            try{
                const {data:{data}} = await getSurveyQuestions(match.params.id)
                setQuestions(convertQuestions(data.question));
                setLoading(false)
            }
            catch(err){
                setLoading(false)
                setApiMessageFeedback("An Error Occured, Try again 😓")
                setOpen(true)
                setQuestions([])
            }
        }

        getSurveys();
        
    },[])
    useEffect(()=>{
        updateQuestions(questions);
        return () => {
            updateQuestions([])
        }
    },[questions])

    const handleClick = () => {
        setOpen(false)
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
                    <QuestionContainer>
                        {questions.map((question, index) => (
                            <Question
                                onRef={(ref) => (null)}
                                key={index}
                                {...question}
                                previewMode = {true}
                                preview={true}
                                questionNumber={index}
                            ></Question>
                        ))}
                    </QuestionContainer>
                )
            }

        </MainContainer>
        </> 
    );
}

export default connect(null,{updateQuestions})(withRouter(SurveyPreview));