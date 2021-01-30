import React from "react";
import { ReactComponent as MoveIcon } from "../../assets/move-icon.svg";
import { ReactComponent as DuplicateIcon } from "../../assets/duplicate-icon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete-icon.svg";
import {
  Switch,
  SwitchInput,
  SwitchSlider,
} from "../survey-settings/survey-settings.styles";
import {
  MainContainer,
  ContentHeader,
  QuestionTitle,
  QuestionFormatDropdown,
  DropdownMenu,
  Caret,
  ContentBody,
  ContentFooter,
  ActionItem,
  QuestionDisplay,
} from "./question.styles";
import { selectCurrentQuestionId } from "../../redux/questions/questions.selector";
import {
  toggleRequired,
  removeQuestion,
  setCurrentId,
  addQuestionToQuestionCollections,
} from "../../redux/questions/questions.action";
import {
  questionFormatTypes,
  setFormat,
} from "../../redux/questions/questions.utils";
import MultiChoice from "../multichoice/multichoice.component";
import Checkboxes from "../checkboxes/checkboxes.component";
import Dropdown from "../dropdown/dropdown.component";
import ShortAnswer from "../shortAnswer/shortAnswer.component";
import LongAnswer from "../longAnswer/longAnswer.component";
import LinearScale from "../linearScale/linearScale.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { debounce } from "../../helper";
import { withRouter } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import { questionDropdownData } from "./question.dropdown.data";
class Question extends React.Component {
  selectBox = React.createRef();
  isCurrent = false;
  constructor(props) {
    super(props);
    const { title, required, previewMode, format, shape, answer, responseMode } = props;
    const myState = { title, required, previewMode, format, shape };

    this.state = {
      ...myState,
      answer: [],
    };

    if(responseMode){
      this.setState({answer})
    }
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  componentDidUpdate() {
    if (!this.isCurrent && !this.state.previewMode) {
      this.setState({ previewMode: true });
    } else if (this.isCurrent && this.state.previewMode) {
      this.setState({ previewMode: false });
    }
  }

  onFormatChange = (event) => {
    event.persist();
    const id = event.target?.closest("div.dropdown-item")?.id;
    if (id) {
      this.setFormatProp(id);
      let title = this.state.title;
      this.setState({ ...setFormat(id), title });
    }
  };

  toggleRequired = () => {
    this.setState((prevState, prevProps) => ({
      required: !prevState.required,
    }));
  };

  setTitle = (title) => {
    this.setState({ title });
  };

  setFormatProp = (format) => {
    this.setState({ format });
  };

  setShape = (shape) => {
    this.setState({ shape });
  };

  setAnswer = (answer) => {
    this.setState({ answer });
  };

  setCurrentId = () => {
    const { preview } = this.props;
    if (!this.isCurrent && !preview) {
      this.props.setCurrentId(this.props.questionNumber);
    }
  };

  render() {
    const {
      currentQuestionId,
      questionNumber,
      setCurrentId,
      removeQuestion,
      preview,
      answerMode,
      responseMode,
      answer
    } = this.props;
    const { title, previewMode, required, format, shape } = this.state;
    this.isCurrent = currentQuestionId === questionNumber;

    return (
      <MainContainer
        isCurrent
        style={{
          border: this.isCurrent ? "2px solid #A4D4AE" : "1px solid #A4D4AE",
        }}
        onClick={this.setCurrentId}
      >
        <div className="" style={{ textAlign: "center", marginBottom: "1rem" }}>
          <MoveIcon style={{ display: "inline-block", cursor: "grab" }} />
        </div>
        <ContentHeader>
          {previewMode ? (
            <QuestionDisplay>
              <span>{questionNumber + 1}.</span>{" "}
              <span>{title || "Question"}</span>
              {required ? <sup style={{ color: "red" }}>*</sup> : null}
            </QuestionDisplay>
          ) : (
            <QuestionTitle
              type="text"
              placeholder="Question"
              value={title}
              onChange={(e) => {
                this.setTitle(e.target.value);
              }}
            />
          )}

          <div
            className="dropdown"
            style={{ visibility: previewMode ? "hidden" : "visible" }}
          >
            <QuestionFormatDropdown data-toggle="dropdown" ref={this.selectBox}>
              {questionDropdownData()[format]}
            </QuestionFormatDropdown>
            <Caret></Caret>
            <DropdownMenu
              className="dropdown-menu"
              onClick={this.onFormatChange}
            >
              {Object.values(questionDropdownData())}
            </DropdownMenu>
          </div>
        </ContentHeader>
        <ContentBody>
          {
            {
              [questionFormatTypes.multichoice]: (
                <MultiChoice
                  options={shape}
                  setShape={this.setShape}
                  setAnswer={this.setAnswer}
                  previewMode={previewMode}
                  answerMode={answerMode}
                  responseMode={responseMode}
                  questionNumber={questionNumber}
                  answer = {answer}
                />
              ),
              [questionFormatTypes.checkbox]: (
                <Checkboxes
                  options={shape}
                  questionNumber={questionNumber}
                  setShape={this.setShape}
                  setAnswer={this.setAnswer}
                  previewMode={previewMode}
                  answerMode={answerMode}
                  answer = {answer}
                  responseMode={responseMode}
                />
              ),
              [questionFormatTypes.dropdown]: (
                <Dropdown
                  options={shape}
                  questionNumber={questionNumber}
                  setShape={this.setShape}
                  setAnswer={this.setAnswer}
                  previewMode={previewMode}
                  answerMode={answerMode}
                  responseMode={responseMode}
                  answer = {answer}
                />
              ),
              [questionFormatTypes.shortanswer]: (
                <ShortAnswer
                  questionNumber={questionNumber}
                  setAnswer={this.setAnswer}
                  previewMode={previewMode}
                  answerMode={answerMode}
                  responseMode={responseMode}
                  answer = {answer}
                />
              ),
              [questionFormatTypes.paragraph]: (
                <LongAnswer
                  questionNumber={questionNumber}
                  setAnswer={this.setAnswer}
                  previewMode={previewMode}
                  responseMode={responseMode}
                  answerMode={answerMode}
                  answer = {answer}
                />
              ),
              [questionFormatTypes.linearscale]: (
                <LinearScale
                  shape={shape}
                  questionNumber={questionNumber}
                  setShape={this.setShape}
                  setAnswer={this.setAnswer}
                  previewMode={previewMode}
                  responseMode={responseMode}
                  answerMode={answerMode}
                  answer = {answer}
                />
              ),
            }[format]
          }
        </ContentBody>
        {previewMode ? null : (
          <ContentFooter>
            <ActionItem>
              <Switch>
                <SwitchInput
                  type="checkbox"
                  checked={required}
                  onChange={this.toggleRequired}
                ></SwitchInput>
                <SwitchSlider className="slider"></SwitchSlider>
              </Switch>
              <span>
                Required <span style={{ color: "red" }}>*</span>
              </span>
            </ActionItem>
            <ActionItem>
              <DuplicateIcon></DuplicateIcon>
              <span>Duplicate</span>
            </ActionItem>
            <ActionItem onClick={() => removeQuestion(questionNumber)}>
              <DeleteIcon></DeleteIcon>
              <span>Delete</span>
            </ActionItem>
          </ContentFooter>
        )}
      </MainContainer>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentQuestionId: selectCurrentQuestionId,
});
export default connect(mapStateToProps, {
  toggleRequired,
  removeQuestion,
  setCurrentId,
})(withRouter(Question));
