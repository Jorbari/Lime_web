import styled from 'styled-components';

export const Section = styled.section`
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:not(:last-child){
        margin-bottom: 2.6rem;
    }
`