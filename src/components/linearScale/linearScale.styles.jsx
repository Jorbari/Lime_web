import styled,{css} from 'styled-components';

export const MainContainer = styled.div`

`

export const TopContainer = styled.div`
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
export const RangeContainer = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 3rem;
    & >:not(:last-child){
        margin-right:2rem;
    }
`
export const SelectContainer = styled.select`
    border: unset;
    &:focus{
        outline: unset;
    }
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
`
export const LinearPreviewContainer = styled.div`
    min-width: 50%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(max-content, 5rem) 1fr minmax(max-content, 5rem);
    grid-gap: 2rem;
`
export const LinearRadioPreviewContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const PreviewRadio = styled.div`
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const PreviewLabel = styled.div`
    align-self: end;
`
