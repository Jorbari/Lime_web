import styled from 'styled-components';

export const variables = {
    navHeight: '8.7rem',
    sideBarwidth: '29.5rem'
}

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: ${variables.sideBarwidth} 1fr;
    grid-template-rows: 100vh;
`

export const MainContentContainer = styled.div`
    max-height: 100vh;
    overflow-y: auto;
`

export const MainContent = styled.div`
    padding: 0 3rem;
    margin-top: ${variables.navHeight}
`