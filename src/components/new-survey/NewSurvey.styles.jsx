import styled from 'styled-components';
import { ReactComponent as caret } from "../../assets/caret-down.svg";

export const DropdownMenu = styled.div`
    width: 100%;
    padding: 2.3rem 3.2rem;
    border-bottom-left-radius: 4rem;
    border-bottom-right-radius:4rem;
    & >*{
        padding: 1rem 1.7rem;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.7rem;
        letter-spacing: 0em;
        cursor: pointer;
        &:hover{
            background-color: lightgreen(currentcolor, 0.6)
        }
    }
    & >:not(:last-child){
        margin-bottom: 1.2rem;
        border-bottom: 0.5px solid rgba(91, 86, 86, 0.5);
    }
`
export const Caret = styled(caret)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    pointer-events: none;
    cursor: pointer;
`