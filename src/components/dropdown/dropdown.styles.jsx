import styled,{css} from 'styled-components';
import { ReactComponent as caret } from "../../assets/caret-down.svg";

export const MainContainer = styled.div`
    display: grid;
    grid-gap: 2.6rem;
    grid-template-columns: 2.2fr 1.3fr;
`
const OptionStyles = css`
    display:flex;
    align-items: center;
    &:not(:last-child){
        margin-bottom: 1.5rem;
    }
`
export const OptionsContainer = styled.div`
    display:flex;
    flex-direction: column;
`
export const OptionContainer = styled.div`
    ${OptionStyles}
    position: relative;
        cursor: pointer;
        &:hover{
            background-color: lighten(#212529, 0.6)
        }
`
export const InputContainer = styled.input`
    border: unset;
    height: 5.5rem;
    padding: 0 2.7rem;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.7rem;
    &:focus{outline: unset}
`
const defaultTextStyle = css`
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.7rem;
    cursor: pointer;
`
export const CloseButton =  styled.button`
    border: unset;
    background: unset;
    &:focus{outline: unset}
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
`
export const AddOptionButton =  styled.span`
    ${defaultTextStyle}
    color: rgba(91, 86, 86, 0.5);
`
export const AddOtherButton =  styled.span`
    ${defaultTextStyle}
    color: #7fcd91;
`
// DROPDOWN STYLES

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

export const QuestionFormatDropdown = styled.div`
    ${inputStyles};
    display: flex;
    align-items: center;
    ${dropDownItemStyles}
`

export const DropdownMenu = styled.div`
    width: 100%;
    padding: 2.7rem;
    border-radius: 4rem;
    ${dropDownItemStyles}
    & >*{
        font-size: 1.6rem;
        padding: 1rem 1.7rem;
        color: #212529;
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