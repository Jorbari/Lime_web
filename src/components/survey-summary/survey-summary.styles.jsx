import styled,{css} from 'styled-components';
import { ReactComponent as caret } from "../../assets/caret-down.svg";

export const MainContainer = styled.div`
    border-bottom: 0.7px solid #9BADAE;
    padding: 2.6rem;
`
const ellipsis = css`
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
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
    grid-template-columns: 1fr max-content;
    & >:last-child{
        justify-content: end;
        border: 1px solid #7FCD91;
    border-radius: 1rem;
    padding: 1.1rem 1.8em;
    display: inline-block;
    }
`
export const ContentBody = styled.div`
`
export const ContentFooter = styled.div`
`

export const QuestionDisplay = styled.div`
    display: flex;
    *:not(:last-child){
        margin-right: 1rem;
    }
    .question{
        font-size: 1.8rem;
        color: #5B5656;
        margin-bottom: .6rem;
    }
    .responses{
        font-size: 1.4rem;
        color: #5B5656;
    }
`
export const SummaryFormatDropdown = styled.div`
    display: flex;
    align-items: center;
    ${dropDownItemStyles}
`
export const DropdownMenu = styled.div`
    width: 100%;
    padding: 2.7rem;
    border-bottom-left-radius: 4rem;
    border-bottom-right-radius:4rem;
    left: -1.8rem;
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