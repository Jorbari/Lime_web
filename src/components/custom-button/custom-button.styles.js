import styled from 'styled-components';
import { primaryColor } from '../../styles/global-variables';

export const CustomButtonContainer = styled.button`
    display:flex;
    align-items:center;
    height:4rem;
    width:auto;
    padding: 10px 10px;
    background-color: ${primaryColor};
    border-radius:5px;
    &:focus{
        outline: none;
    }
`