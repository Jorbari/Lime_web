import styled from 'styled-components';
import {variables} from '../App.styles'
export const NavBarContainer = styled.nav`
    width: ${`calc(100vw - ${variables.sideBarwidth})`};
    height: ${variables.navHeight};
    position: fixed;
    z-index: 10;
    top: 0;
    padding: 0 3rem;
`
export const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 4.2rem;
    text-transform: capitalize;
    border-bottom: 1px solid rgba(91, 86, 86, 0.5);
    background: #fff;
    height: 100%;
`