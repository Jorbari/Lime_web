import styled from 'styled-components';

export const TeamMateCardContainer = styled.div`
    display:flex;
`

export const TeammateInfoContainer = styled.div`
    display:flex;
    flex: 1 1 50%;
    flex-direction: row;
    margin: 1rem 0;
`

export const TeammateInfo = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:2rem;

    & h1{
        font-weight:500;
    }
`

export const TeammatePhoto = styled.img`
    height: 5rem;
    width: 5rem;
    border-radius:50%;
`

export const DeleteContainer = styled.div`
    display: flex;
    flex: 1 1 30%;
    justify-content: center;
    & button {
        color:red;
        outline: none;
    }
`
