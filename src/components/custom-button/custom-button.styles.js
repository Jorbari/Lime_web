import styled,{css} from 'styled-components';
const primaryStyles = css`
    background: #B6E6BD;
    &:hover {
    }
`
const InvertedStyles = css`
    background-color: white;
    border: 1px solid #B6E6BD;
    &:hover {
}
`
const ButtonStyles = css`
    background: rgba(247, 247, 247, 0.8);
    border: 1.5px solid #F5F5F5;
    &:hover {}
`
const SpanWidthStyles = css`
    ${ButtonStyles};
    width: 100%;
    justify-content: center;
    padding: 1.4rem 0;
`

const getButtonStyles = props =>{
    if(props.primary){
        return primaryStyles;
    }
    if(props.spanWidth){
        return SpanWidthStyles;
    }
    return props.inverted? InvertedStyles: ButtonStyles;
}

export const CustomButtonContainer = styled.button`
    padding:1.1rem 1.8rem;
    border: unset;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.7rem;
    display: flex;
    align-items: center;
    color: #5B5656;
    border-radius: 1rem;
    & >:not(:last-child){
        margin-right:1rem;
    }
    ${getButtonStyles}
`