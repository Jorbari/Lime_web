import React from "react";
import { ReactComponent as MultichoiceIcon } from "../../assets/multichoice.svg";
import { ReactComponent as CheckboxIcon } from "../../assets/checkbox.svg";
import { ReactComponent as DropdownIcon } from "../../assets/dropdown.svg";
import { ReactComponent as LinearIcon } from "../../assets/linearscale.svg";
import { ReactComponent as Paragraph } from "../../assets/paragraph.svg";
import { ReactComponent as ShortanswerIcon } from "../../assets/shortanswer.svg";
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
class Question extends React.Component {
  selectBox = React.createRef();
  isCurrent = false;
  constructor(props) {
    super(props);
    const {title,required,previewMode,format,shape} = props
    const myState = {title,required,previewMode,format,shape}

    this.state = {
      ...myState,
    };
  }
  
  componentDidMount() {
      console.log(this);
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

  // AddToQuestionCollection() {
  //   this.props.addQuestionToQuestionCollections(
  //     { ...this.state },
  //     this.props.match.params.id
  //   );
  // }

  onFormatChange = (event) => {
    event.persist();
    const id = event.target?.closest("div.dropdown-item")?.id;
    if (id) { 
      this.setFormatProp(id);
      this.setState({...setFormat(id)})
      this.selectBox.current.innerHTML = event.target.closest(
        "div.dropdown-item"
      ).outerHTML;
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

  setCurrentId = () => {
    if (!this.isCurrent) {
      this.props.setCurrentId(this.props.questionNumber);
    }
  };

  render() {
    const {
      currentQuestionId,
      questionNumber,
      setCurrentId,
      removeQuestion,
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

          
            <div className="dropdown" style={{visibility: previewMode? "hidden": "visible"}}>
              <QuestionFormatDropdown
                data-toggle="dropdown"
                ref={this.selectBox}
              >
                Multiple choice
              </QuestionFormatDropdown>
              <Caret></Caret>
              <DropdownMenu
                className="dropdown-menu"
                onClick={this.onFormatChange}
              >
                <div
                  className="dropdown-item"
                  id={`${questionFormatTypes.multichoice}`}
                >
                  <MultichoiceIcon />
                  <span>Multiple choice questions</span>
                </div>
                <div
                  className="dropdown-item"
                  id={`${questionFormatTypes.checkbox}`}
                >
                  <CheckboxIcon />
                  <span>Checkboxes</span>
                </div>
                <div
                  className="dropdown-item"
                  id={`${questionFormatTypes.dropdown}`}
                >
                  <DropdownIcon />
                  <span>Dropdown</span>
                </div>
                <div
                  className="dropdown-item"
                  id={`${questionFormatTypes.linearscale}`}
                >
                  <LinearIcon />
                  <span>Linear scale</span>
                </div>
                <div
                  className="dropdown-item"
                  id={`${questionFormatTypes.shortanswer}`}
                >
                  <ShortanswerIcon />
                  <span>Short answer</span>
                </div>
                <div
                  className="dropdown-item"
                  id={`${questionFormatTypes.paragraph}`}
                >
                  <Paragraph />
                  <span>Paragraph</span>
                </div>
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
                  previewMode={previewMode}
                />
              ),
              [questionFormatTypes.checkbox]: (
                <Checkboxes
                  options={shape}
                  setShape={this.setShape}
                  previewMode={previewMode}
                />
              ),
              [questionFormatTypes.dropdown]: (
                <Dropdown
                  options={shape}
                  setShape={this.setShape}
                  previewMode={previewMode}
                />
              ),
              [questionFormatTypes.shortanswer]: (
                <ShortAnswer
                  previewMode={previewMode}
                />
              ),
              [questionFormatTypes.paragraph]: (
                <LongAnswer
                  previewMode={previewMode}
                />
              ),
              [questionFormatTypes.linearscale]: (
                <LinearScale
                  shape={shape}
                  setShape={this.setShape}
                  previewMode={previewMode}
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
