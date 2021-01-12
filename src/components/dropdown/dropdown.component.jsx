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
    CloseButton,
} from './dropdown.styles'


class Dropdown extends React.Component{
    constructor() {
        super();
        this.state = {
            isOther: false,
        };
    }
    handleChange = (event, index)=>{
        let options,setShape
        ({options, setShape} = this.props)
        const { value } = event.target;
        options[index]= value
        setShape(options)
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
        const {isOther} = this.state
        const {options,previewMode} = this.props
        return(
            <MainContainer>
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
            </MainContainer>
        )
    }
}

export default Dropdown