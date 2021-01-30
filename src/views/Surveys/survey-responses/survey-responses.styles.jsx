import styled,{css} from 'styled-components'

export const MainContainer = styled.div`
    /* margin: 3.4rem 15rem; */
`
export const Actions = styled.div`
    max-height: 100%;
    border: 1px solid #A4D4AE;
    width:  100%;
    border-radius: 1rem;
    padding: 2.1rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    margin-bottom: 2rem;
    .actions__header{
        font-weight: normal;
        font-size: 2.4rem;
        line-height: 3.6rem;
        color: #5B5656;
    }
    .actions__footer{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        & >:not(:last-child){
            margin-right: 2.5rem
        }
    }
`
const textStyles = css`
    font-size: 1.8rem;
    line-height: 2.7rem;
    color: #5B5656;
`
export const Pagination = styled.div`
    display: flex;
    align-items: center;
    ${textStyles};
    & >:not(:last-child){
        margin-right: 1rem;
    }
    .input{
        border: unset;
        font-size: 1.8rem;
        line-height: 2.7rem;
        color: #5B5656;
         ${textStyles};
         width: 3rem;
    }
`
export const Button =  styled.button`
    border: unset;
    background: unset;
    display: flex;
    align-items: center;
    & >:not(:last-child){
        margin-right: 1rem
    }
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${({red})=>red? '#ff0000': '#5B5656'};
    & path{
        fill: ${({red})=>red? '#ff0000': '#5B5656'};
    }
`

export const QuestionContainer = styled.div`
    & >:not(:last-child){
            margin-bottom: 2rem;
    }
    margin-bottom: 3.5rem;
`