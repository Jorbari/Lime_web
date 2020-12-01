import React from "react";
import {CustomCheckboxContainer} from './custom-checkbox.styles'
import {ReactComponent as Checkmark} from '../../assets/checkmark.svg'
const CustomCheckbox= ({...props}) => (
  <CustomCheckboxContainer >
      <input {...props}/>
      <label htmlFor={props?.id}>
        <Checkmark/>
      </label>
  </CustomCheckboxContainer>
);

export default CustomCheckbox;