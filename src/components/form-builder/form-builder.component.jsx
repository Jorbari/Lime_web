import React from "react";
import { ReactComponent as AddCircleIcon } from "../../assets/add-with-circle.svg";
import { selectQuestions } from "../../redux/questions/questions.selector";
import { addQuestion } from "../../redux/questions/questions.action";
import CustomButton from "../custom-button/custom-button.component";
import Question from "../question/question.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { MainContainer } from "./form-builder.styles";

class FormBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.childArray = [];
  }
  componentDidUpdate() {
    console.log(this.childArray);
    this.childArray = this.props.questions.map((question, index) => {
      if (this.childArray[index]) {
        return this.childArray[index];
      } else {
        return React.createRef();
      }
    });
  }
  componentWillUnmount() {
    this.childArray = [];
  }

  fetchAllChildState = () => {
    this.props.questions.forEach((question, index) => {
      this.childArray[index].AddToQuestionCollection();
    });
  };
  render() {
    return (
      <MainContainer>
        {this.props.questions.map((question, index) => (
          <Question
            onRef={(ref) => (this.childArray[index] = ref)}
            key={index}
            {...question}
            questionNumber={index}
          ></Question>
        ))}

        <CustomButton spanWidth onClick={this.props.addQuestion}>
          <AddCircleIcon></AddCircleIcon>
          <span>Add Question</span>
        </CustomButton>
        <button onClick={this.fetchAllChildState}>submit</button>
      </MainContainer>
    );
  }
}
const matchStateToProps = createStructuredSelector({
  questions: selectQuestions,
});

export default connect(matchStateToProps, { addQuestion })(FormBuilder);
