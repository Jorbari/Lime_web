import React from "react";
import {CustomRadioContainer} from './custom-radio.styles'

const CustomRadio = ({...props}) => (
  <CustomRadioContainer >
      <input {...props}/>
      <label htmlFor={props?.id}></label>
  </CustomRadioContainer>
);

export default CustomRadio;