import React from 'react';
import CustomRadio from '../custom-radio/custom-radio.component';
import {ReactComponent as CloseIcon} from '../../assets/close-btn.svg'
import{
    MainContainer,
    OptionsContainer,
    OptionContainer,
    InputContainer,
    AddOptionButton,
    AddOtherButton,
    QuestionFormatDropdown,
    DropdownMenu,
    Caret,
    CloseButton,
} from './dropdown.styles'

class Dropdown extends React.Component{
    constructor(props) {
        super(props);
        let isOther = props.options[props.options.length - 1] == 'Other'? true: false
        this.state = {
            isOther,
            selectedValue: 'Please choose one option'
        };

    }
    componentDidMount(){
        const {responseMode,answer,options} =this.props
        if(responseMode && answer.length > 0){
            let index = answer[0]
            let selectedValue = options[index]
            this.setState({selectedValue}, ()=>{
                console.log("I was executed")
            })
        }
    }
    handleChange = (event, index)=>{
        let options,setShape
        ({options, setShape} = this.props)
        const { value } = event.target;
        options[index]= value
        setShape(options)
    }
    
    handleAnswer = (event)=>{
        const {questionNumber, setAnswer, options} = this.props
        const {id} = event.target;
        this.setState({selectedValue: options[+id]})
        console.log(`Question ${questionNumber} is: ${[+id]}`)
        setAnswer([+id])
    }

    addOptions = (option="")=>{
        let options,isOther,setShape
        ({options, setShape} = this.props);
        ({isOther} = this.state);
        const length = options.length
        let newOption = option? option: `Option ${length+1}`
        options = [...options, newOption]
        if(isOther){[options[length],options[length-1]] = [options[length-1],options[length]]} //make other come last if exist
        setShape(options);
        option? this.setState({isOther:true}) : this.setState() // set isother to true if other was added
    }

    removeOption = (index)=>{
        let options,isOther,setShape
        ({options, setShape} = this.props);
        ({isOther} = this.state);
        const length = options.length
        options.splice(index,1);
        let isOtherIndex = index === length-1 && isOther
        setShape(options);
        isOtherIndex? this.setState({isOther:false}) : this.setState()
    }

    isLastAndisOther(index){
        return index+1 === this.props.options.length && this.state.isOther
    }

    render(){
        const {isOther,selectedValue} = this.state
        const {options,previewMode,answerMode,responseMode, answer} = this.props
        return(
            <MainContainer>
                {
                    answerMode || responseMode?
                    (
                        <div className="dropdown">
                        <QuestionFormatDropdown
                            data-toggle="dropdown"
                            ref={this.selectBox}
                            style = {{pointerEvents: responseMode? 'none': 'auto'}}
                        >
                            <span>{selectedValue}</span>
                        </QuestionFormatDropdown>
                        <Caret></Caret>
                        <DropdownMenu
                            className="dropdown-menu"
                            onClick={this.onFormatChange}
                        >
                            {
                                options.map((option, index)=>(
                                    <OptionContainer key={index} id={index} onClick={(e)=>{this.handleAnswer(e)}}>
                                        <span >{option}</span>
                                    </OptionContainer>
                                ))
                            }
                        </DropdownMenu>
                    </div>
                    ):
                    (
                        <OptionsContainer>
                        {
                            options.map((option, index)=>(
                                <OptionContainer key={index}>
                                    <span>{index + 1}</span>
                                    <InputContainer style={previewMode?null:{borderBottom:'0.5px solid rgba(91, 86, 86, 0.5)'}}previewMode value={option} onChange={(e)=>{this.handleChange(e,index)}} readOnly={this.isLastAndisOther(index)}></InputContainer>
                                    {index && !previewMode ? (<CloseButton onClick={()=>{this.removeOption(index)}}><CloseIcon/></CloseButton>): null}
                                </OptionContainer>
                            ))
                        }
                        {
                            previewMode? null:
                            (
                                <OptionContainer>
                                {/* <CustomRadio type="radio" disabled name={`question${1}`}/> */}
                                <div className="" style={{padding:"0 2.7rem"}}>
                                    <AddOptionButton onClick = {()=>{this.addOptions()}}>Add option</AddOptionButton>
                                </div>
                            </OptionContainer>
                            )
                        }
        
                        </OptionsContainer>
                    
                    )
                }


            </MainContainer>
        )
    }
}

export default Dropdown