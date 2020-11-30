import React,{useEffect} from 'react';
import {ReactComponent as MultichoiceIcon} from '../../assets/multichoice.svg'
import {ReactComponent as CheckboxIcon} from '../../assets/checkbox.svg'
import {ReactComponent as DropdownIcon} from '../../assets/dropdown.svg'
import {ReactComponent as LinearIcon} from '../../assets/linearscale.svg'
import {ReactComponent as Paragraph} from '../../assets/paragraph.svg'
import {ReactComponent as ShortanswerIcon} from '../../assets/shortanswer.svg'
import {ReactComponent as MoveIcon} from '../../assets/move-icon.svg'
import {ReactComponent as DuplicateIcon} from '../../assets/duplicate-icon.svg'
import {ReactComponent as DeleteIcon} from '../../assets/delete-icon.svg'
import{
    Switch,
    SwitchInput,
    SwitchSlider,
} from '../survey-settings/survey-settings.styles'
import{
    MainContainer,
    ContentHeader,
    QuestionTitle,
    QuestionFormatDropdown,
    DropdownMenu,
    Caret,
    ContentBody,
    ContentFooter,
    ActionItem,
} from './question.styles'
import { selectCurrentQuestionId } from '../../redux/questions/questions.selector';
import { toggleRequired, removeQuestion,setTitle} from '../../redux/questions/questions.action';
import { questionFormatTypes } from '../../redux/questions/questions.utils';
import MultiChoice from '../multichoice/multichoice.component';
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import { debounce } from '../../helper';
const Question = (props)=>{
    console.log(props)
    const{currentQuestionId,questionNumber,toggleRequired,setTitle,title,removeQuestion,required} =props
    const isCurrent =  currentQuestionId === questionNumber
    const selectBox = React.createRef()
    const onFormatChange = (event) =>{
        event.persist();
        console.log(event.target.id)
        selectBox.current.innerHTML = event.target.closest('div.dropdown-item').outerHTML
    }
    console.log("render");
    return(
        <MainContainer isCurrent style={{border:isCurrent? '2px solid #A4D4AE' : '1px solid #A4D4AE'}}>
            <div className="" style={{textAlign: "center", marginBottom:'1rem'}}><MoveIcon style={{display: "inline-block", cursor: 'grab'}}/></div>
            <ContentHeader>
                <QuestionTitle type="text" placeholder="Question" value={title} onChange={(e)=>{debounce(setTitle(e.target.value))}}/>
                <div className="dropdown">
                    <QuestionFormatDropdown data-toggle="dropdown" ref = {selectBox}>Multiple choice</QuestionFormatDropdown>
                    <Caret></Caret>
                    <DropdownMenu className="dropdown-menu" onClick = {onFormatChange}>
                        <div className="dropdown-item" id={`${questionFormatTypes.multichoice}`}>
                            <MultichoiceIcon/>
                            <span>Multiple choice questions</span>
                            </div>
                        <div className="dropdown-item" id={`${questionFormatTypes.checkbox}`}>
                            <CheckboxIcon/>
                            <span>Checkboxes</span>
                            </div>
                        <div className="dropdown-item" id={`${questionFormatTypes.dropdown}`}>
                            <DropdownIcon/>
                            <span>Dropdown</span>
                            </div>
                        <div className="dropdown-item" id={`${questionFormatTypes.linearscale}`}>
                            <LinearIcon/>
                            <span>Linear scale</span>
                            </div>
                        <div className="dropdown-item" id={`${questionFormatTypes.shortanswer}`}>
                            <ShortanswerIcon/>
                            <span>Short answer</span>
                            </div>
                        <div className="dropdown-item" id={`${questionFormatTypes.paragraph}`}>
                            <Paragraph/>
                            <span>Paragraph</span>
                            </div>
                        </DropdownMenu>
                </div>
            </ContentHeader>
            <ContentBody>
                <MultiChoice/>
            </ContentBody>
            <ContentFooter>
                <ActionItem>
                    <Switch>
                        <SwitchInput type="checkbox" checked = {required} onChange={toggleRequired}></SwitchInput>
                        <SwitchSlider className="slider"></SwitchSlider>
                    </Switch>
                    <span>Required <span style={{color:'red'}}>*</span></span>
                </ActionItem>
                <ActionItem>
                    <DuplicateIcon></DuplicateIcon>
                    <span>Duplicate</span>
                </ActionItem>
                <ActionItem onClick = {removeQuestion}>
                    <DeleteIcon></DeleteIcon>
                    <span>Delete</span>
                </ActionItem>
            </ContentFooter>
        </MainContainer>
    )
}
const mapStateToProps =createStructuredSelector({
    currentQuestionId: selectCurrentQuestionId
})
export default connect(mapStateToProps,{toggleRequired, removeQuestion, setTitle})(Question)