import styled,{css} from 'styled-components';
import { ReactComponent as caret } from "../../assets/caret-down.svg";

export const MainContainer = styled.div`
    max-height: 100%;
    width:  100%;
    border-radius: 1rem;
    padding: 2.6rem;
    padding-top: 1rem;
`
const ellipsis = css`
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
`
const inputStyles = css`
    border: unset;
    height: 5.5rem;
    padding: 0 2.7rem;
    background: rgba(247, 247, 247, 0.8);
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.7rem;
    &:focus{outline: unset}
`
const dropDownItemStyles = css`
    .dropdown-item{
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.8rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        & span{
            margin-left: 2rem;
            flex: 1;
            ${ellipsis};
        }
        &.active, &:active{
            background-color: unset;
            color: unset;
        }
    }
`
export const ContentHeader = styled.div`
    display: grid;
    grid-gap: 2.6rem;
    grid-template-columns: 2.2fr 1.3fr;
    padding: 0 2.5rem;
`

export const QuestionTitle = styled.input`
    ${inputStyles};
    cursor: pointer;
    ${ellipsis};
`

export const QuestionFormatDropdown = styled.div`
    ${inputStyles};
    display: flex;
    align-items: center;
    ${dropDownItemStyles}
`
export const DropdownMenu = styled.div`
    width: 100%;
    padding: 2.7rem;
    border-bottom-left-radius: 4rem;
    border-bottom-right-radius:4rem;
    ${dropDownItemStyles}
    & >*{
        padding: 1rem 1.7rem;
        &:hover{
            background-color: lighten(currentcolor, 0.6)
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
    right: 1.5rem;
    pointer-events: none;
    cursor: pointer;
`

export const ContentBody = styled.div`
    padding: 2.5rem; 
    
`

export const ContentFooter= styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & >:not(:last-child){
        margin-right: 2.5rem;
    }

`

export const ActionItem= styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.1rem;
    cursor: pointer;
    & >:not(:last-child){
        margin-right: 1rem;
    }

`

export const QuestionDisplay= styled.p`
    margin: unset;
    font-size: 2.4rem;
    line-height: 3.6rem;
    color: #5B5656;
    & >:not(:last-child){
        margin-right: .6rem;
    }
`
