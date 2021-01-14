import React from "react";
import { ReactComponent as AddCircleIcon } from "../../assets/add-with-circle.svg";
import { selectQuestions } from "../../redux/questions/questions.selector";
import { addQuestion, updateQuestions } from "../../redux/questions/questions.action";
import CustomButton from "../custom-button/custom-button.component";
import Question from "../question/question.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { MainContainer,ButtonContainer } from "./form-builder.styles";
import { withRouter } from "react-router-dom";
import Spinner from '../spinner/spinner';
import Notifier from "../Notifier/notifier.component";  
import {addSurveyQuestions} from "../../api/survey";
class FormBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isLoading: false,
      apiMessageFeedback:''
    };
    this.refArray = [];

  }
  componentDidMount() {
    console.log("I just mounted")
    console.log(this.props)
    this.setArrayOfReferences();
  }
  componentDidUpdate() {
    console.log(this.refArray);
    console.log("I just updated")
    this.setArrayOfReferences();
  }

  componentWillUnmount() {
    this.props.updateQuestions(this.getAllQuestions())
    this.refArray = [];
    console.log("I just unmounted")
  }

  setArrayOfReferences = ()=>{
    this.refArray = this.props.questions.map((question, index) => {
      if (this.refArray[index]) {
        return this.refArray[index];
      } else {
        return React.createRef();
      }
    });
  }

  modifyQuestionNodesTitle = (question) => {
    return {
      isRequired: question.required,
      question_body: question.title,
      question_options: question.shape,
      format: question.format
    }
  }

  fetchAllChildState = async() => {
    let questions = []
    this.setState({isLoading:true})
    this.refArray.forEach((questionRef)=>{
      let question = {...questionRef.state}
      question.shape = JSON.stringify(question.shape)
      questions.push(this.modifyQuestionNodesTitle(question))
    })
    console.log(this.props.match.params.id,questions)
    try{
      const { data: { response }, } = await addSurveyQuestions(this.props.match.params.id,questions);
      console.log(response,">>>>>>>>>>>")
      this.setState({open:true,apiMessageFeedback:"Survey Questions Added Successfully",isLoading:false})
    }
    catch (error) {
      console.log(error.response)
      this.setState({open:true,apiMessageFeedback:"An error occurred, please try again !!!",isLoading:false})
    }
  };

  getAllQuestions = ()=>{
    return this.refArray.map((questionRef)=>{
      let question = {...questionRef.state}
      return question
    })
  }

  handleClick = () => {
    this.setState({open:false})
  };
  render() {
    const {questions} = this.props
    const {isLoading,apiMessageFeedback,open} = this.state
    return (
      
      <MainContainer>
        <Notifier
          open={open}
          handleClick={() => this.handleClick()}
          message={apiMessageFeedback}
        />
        {questions.map((question, index) => (
          <Question
            onRef={(ref) => (this.refArray[index] = ref)}
            key={index}
            {...question}
            rArr = {this.refArray}
            questionNumber={index}
          ></Question>
        ))}
        <ButtonContainer>
          <CustomButton spanWidth = { questions.length? false:true} onClick={this.props.addQuestion}>
            <AddCircleIcon></AddCircleIcon>
            <span>Add Question</span>
          </CustomButton>
          {
            questions.length?
            (
              <CustomButton primary onClick={this.fetchAllChildState}>
              <span>Submit</span>  
              {
                isLoading?
                (
                  <span><Spinner showSpinner={true} radius = {'2rem'} /></span>
                ):
                null
              }
              </CustomButton>
            ):
            null
          }
        </ButtonContainer>
      </MainContainer>
    );
  }
}

const matchStateToProps = createStructuredSelector({
  questions: selectQuestions,
});

export default connect(matchStateToProps, { addQuestion,updateQuestions })(withRouter(FormBuilder));
