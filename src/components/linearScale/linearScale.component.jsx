import React from 'react';
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component';
import {ReactComponent as CloseIcon} from '../../assets/close-btn.svg'
import{
    MainContainer,
    RangeContainer,
    OptionContainer,
    InputContainer
} from './linearScale.styles'


class LinearScale extends React.Component{
    constructor() {
        super();
        this.state = {};
    }

    render(){
        return(
            <MainContainer>
                <div className="">
                    <RangeContainer>
                        <select name="start" id="start">
                            <option value="0">0</option>
                            <option value="1">1</option>
                        </select>
                        <span>to</span>
                        <select name="end" id="end">
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </RangeContainer>
                    <OptionContainer>
                            <span>1</span>
                            <InputContainer style={{borderBottom:'0.5px solid rgba(91, 86, 86, 0.5)'}} placeholder="Label (optional)"></InputContainer>
                    </OptionContainer>
                    <OptionContainer>
                            <span>5</span>
                            <InputContainer style={{borderBottom:'0.5px solid rgba(91, 86, 86, 0.5)'}} placeholder="Label (optional)"></InputContainer>
                    </OptionContainer>
                </div>
            </MainContainer>
        )
    }
}

export default LinearScale