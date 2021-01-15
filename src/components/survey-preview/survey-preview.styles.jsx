import styled,{css} from 'styled-components';

export const MainContainer = styled.div`
    height: 100%;
    max-height: 100%;
    margin: 3.4rem 15rem;
`
export const QuestionContainer = styled.div`
    & >:not(:last-child){
            margin-bottom: 2rem;
    }
`