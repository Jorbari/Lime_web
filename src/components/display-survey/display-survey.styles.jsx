import styled,{css} from 'styled-components';

export const MainContainer = styled.div`
    height: 100%;
    max-width: 112rem;
    margin: 3.4rem auto;
`
export const QuestionContainer = styled.div`
    & >:not(:last-child){
            margin-bottom: 2rem;
    }
    margin-bottom: 3.5rem;
`

export const HeadingCard = styled.div`
    width: 100%;
    padding: 5.1rem 0;
    margin-bottom: 2rem;
    position: sticky;
    top: 0;
    z-index: 50;
    background: #fff;
`

export const Heading = styled.div`
    font-size: 3.2rem;
    line-height: 3.6rem;
    color: #5B5656;
    font-weight: bold;
    margin-bottom: 3.5rem;
`

export const Brief = styled.div`
    font-size: 1.8rem;
    line-height: 2.4rem;
    color: #5B5656;
    font-weight: normal;
`


export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    & >:not(:last-child){
        margin-right: 2rem;
    }
`