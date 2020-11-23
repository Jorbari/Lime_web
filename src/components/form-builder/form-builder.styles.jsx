import styled,{css} from 'styled-components';

export const MainContainer = styled.div`
    height: 100%;
    max-height: 100%;
    overflow-y: scroll;
    & >:not(:last-child){
        margin-bottom: 2rem;
    }
`