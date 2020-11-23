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
} from './multichoice.styles'


class MultiChoice extends React.Component{
    constructor() {
        super();
        this.state = {
            isOther: false,
            options:['Option 1'] 
        };
    }
    handleChange = (event, index)=>{
        let options
        ({options} = this.state);
        const { value } = event.target;
        options[index]= value
        this.setState({options})
    }
    addOptions = (option="")=>{
        let options,isOther
        ({options, isOther} = this.state);
        const length = options.length
        let newOption = option? option: `Option ${length+1}`
        options = [...options, newOption]
        if(isOther){[options[length],options[length-1]] = [options[length-1],options[length]]} //make other come last if exist
        option? this.setState({options,isOther:true}) : this.setState({options}) // set isother to true if other was added
    }
    removeOption = (index)=>{
        let options,isOther
        ({options, isOther} = this.state);
        const length = options.length
        options.splice(index,1);
        let isOtherIndex = index === length-1 && isOther
        isOtherIndex? this.setState({options,isOther:false}) : this.setState({options})
    }
    isLastAndisOther(index){
        return index+1 === this.state.options.length && this.state.isOther
    }
    render(){
        const {options,isOther} = this.state
        return(
            <MainContainer>
                <OptionsContainer>
                {
                    options.map((option, index)=>(
                        <OptionContainer key='index'>
                            <CustomRadio type="radio" disabled name={`question${1}`} id={index}/>
                            <InputContainer value={option} onChange={(e)=>{this.handleChange(e,index)}} readOnly={this.isLastAndisOther(index)}></InputContainer>
                            {index ? (<CloseButton onClick={()=>{this.removeOption(index)}}><CloseIcon/></CloseButton>): null}
                        </OptionContainer>
                    ))
                }
                <OptionContainer>
                    <CustomRadio type="radio" disabled name={`question${1}`}/>
                    <div className="" style={{padding:"0 2.7rem"}}>
                        <AddOptionButton onClick = {()=>{this.addOptions()}}>Add option {isOther?null:'or'}</AddOptionButton>
                        {
                            isOther? null:(<AddOtherButton onClick = {()=>{this.addOptions('Other')}}>Add other</AddOtherButton>)
                        }
                    </div>
                </OptionContainer>
                </OptionsContainer>
            </MainContainer>
        )
    }
}

export default MultiChoice