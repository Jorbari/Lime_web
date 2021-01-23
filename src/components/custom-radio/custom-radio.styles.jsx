import styled,{css} from 'styled-components';

export const CustomRadioContainer = styled.div`
    margin-bottom: -1rem;
    input{
        display:none;
        
        & + label{
            width: 2rem;
            height: 2rem; 
            border-radius: 50%;
            border: 1px solid #A4D4AE;
            position: relative;
            margin: unset;
            cursor:pointer;
            &::after{
                content: '';
                position: absolute;
                width: 1rem;
                height: 1rem; 
                border-radius: 50%;
                background: #B6E6BD;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: all .3s ease-in-out;
            }
        }
        &:checked + label{
            &::after{
                transform: translate(-50%, -50%) scale(1)
            }
        }
    }

`