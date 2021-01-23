import styled,{css} from 'styled-components';
// import '../../assets/checkmark';
export const CustomCheckboxContainer = styled.div`
    margin-bottom: -1rem;
    input{
        display:none;
        
        & + label{
            width: 2rem;
            height: 2rem; 
            border: 1px solid #A4D4AE;
            position: relative;
            margin: unset;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor:pointer;
        }
        &:checked + label{
            background: #B6E6BD;
        }
    }

`