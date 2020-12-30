import styled,{css} from 'styled-components';

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
`
export const InputContainer = styled.input`
    border: unset;
    height: 5.5rem;
    padding: 0 2.7rem;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.7rem;
    &:focus{outline: unset}
    border: unset;
    border-bottom: 1px dotted
`
const defaultTextStyle = css`
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.7rem;
    cursor: pointer;
`