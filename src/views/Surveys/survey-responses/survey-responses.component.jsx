import React,{useState, useEffect} from 'react';
import {ReactComponent as CaretLeft} from '../../../assets/pagination-left.svg';
import {ReactComponent as CaretRight} from '../../../assets/pagination-right.svg';
import {ReactComponent as PrintIcon} from '../../../assets/print-icon.svg';
import {ReactComponent as DeleteIcon} from '../../../assets/delete-icon.svg';
import {getIndividualResponse, deleteResponse} from '../../../api/survey'
import Notifier from "../../../components/Notifier/notifier.component";
import {withRouter} from 'react-router-dom'
import Spinner from '../../../components/spinner/spinner'
import Question from "../../../components/question/question.component";
import {setNoOfSurveyResponses} from '../../../redux/survey/survey.action'
import {selectResponseCount} from '../../../redux/survey/survey.selector'
import { createStructuredSelector } from "reselect";
import { convertQuestions } from "../../../helpers/helper";
import {connect} from 'react-redux'
import {
    Actions,
    Pagination,
    Button,
    QuestionContainer
} from './survey-responses.styles'

const SurveyResponses = (props)=>{
    const [apiMessageFeedback, setApiMessageFeedback] = useState("");
    const [open, setOpen] = useState(false);
    const [isLoading, setisLoading] =  useState(false)
    const [responseId, setresponseId] =  useState(1)
    const [totalPages, settotalPages] =  useState(0)
    const [questions, setQuestions] = useState([]);
    const { match, setNoOfSurveyResponses, responseCount} = props;

    const handleClick = () => {
        setOpen(false);
    };
    const setPageNo = (number)=>{
        if(number > 0 && number <= totalPages){
            setresponseId(number)
        }
    }
    useEffect(() => {
        const fetchIndividualResponse = async () => {
          setisLoading(true);
          try {
            const response = await getIndividualResponse(match.params.id, responseId);
            const {data,currentPage,totalPages} = response.data
            console.log(response)
            settotalPages(totalPages)
            setNoOfSurveyResponses(totalPages)
            setQuestions(convertQuestions(data));
            setisLoading(false);
          } catch (err) {
            console.log(err);
            setisLoading(false);
            setApiMessageFeedback("An Error Occured, Try again 😓");
            setOpen(true);
          }
        };
    
        fetchIndividualResponse();
      }, [responseId]);
    const formatNumber = (number)=>{
    if (number/10 >= 10){
        return `#${number}`
    }
    else{
        let numOfZero = number > 9? 1: 2;
        return `#${new Array(numOfZero).fill(0).join('')}${number}`;
    }
    }
    const deleteSurveyResponse = ()=>{
        deleteResponse()
    }
    const handleOnInput = (event)=>{
        console.log(event.target.textContent, event)
    }
 return (
    <div className="main-container">
        <Notifier
          open={open}
          handleClick={() => handleClick()}
          message={apiMessageFeedback}
        />
        <Actions>
            <p className="actions__header">Response {formatNumber(responseId)} </p>

            <div className="actions__footer">
                <Pagination>
                    <CaretLeft style={{cursor:'pointer'}} onClick={()=>{setPageNo(responseId - 1)}}/>
                    {/* <input type="number" value={responseId} className="input"/> */}
                    <span role="textbox"  onInput={handleOnInput}>{responseId}</span>
                    <span> of {responseCount}</span>
                    <CaretRight style={{cursor:'pointer'}} onClick={()=>{setPageNo(responseId + 1)}}/>
                </Pagination>
                <Button className="">
                    <PrintIcon/>
                    <span>Print response</span>
                </Button>
                <Button red={true}>
                    <DeleteIcon/>
                    <span>Delete response</span>
                </Button>
            </div>

        </Actions>
        {
                isLoading?
                (
                    <div className="" style = {{marginTop: "2rem"}}><Spinner showSpinner={true} radius = {'5rem'} /></div>
                ):
                (
                    <div className="">
                        <QuestionContainer>
                            {questions.map((question, index) => (
                                <Question
                                    onRef={(ref) => (null)}
                                    key={index}
                                    {...question}
                                    previewMode = {true}
                                    responseMode = {true}
                                    preview={true}
                                    questionNumber={index}
                                ></Question>
                            ))}
                        </QuestionContainer>
                        
                        {
                            totalPages===0?
                            (
                                <Actions>
                                    <p className="actions__header">No response available for this survey yet </p>
                                </Actions>
                            ): null
                        }
                    </div>
                )
            }
    </div>
 )
}

const matchStateToProps = createStructuredSelector({
    responseCount: selectResponseCount
});

export default connect(matchStateToProps,{setNoOfSurveyResponses})(withRouter(SurveyResponses));