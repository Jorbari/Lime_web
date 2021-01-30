import styled from 'styled-components';
import {variables} from '../../../App.styles'

export const MainContainer = styled.div`
    margin: 3.4rem 15rem;
`
export const Nav = styled.nav`
    font-weight: normal;
    font-size: 1.8rem;
    padding: 1rem 0;
    color: #5B5656;
    margin-top: 5rem;
`

export const NavItem = styled.span`
cursor: pointer;
&:not(:last-child){
    margin-right: 4rem;
}
padding: 1rem 0;
background:unset;
&.active{
    font-weight: bold;
    border-bottom: 1px solid #5B5656;
}
`
export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Header = styled.header`
    max-height: 100%;
    border: 1px solid #A4D4AE;
    width:  100%;
    border-radius: 1rem;
    padding: 2.6rem;
    padding-bottom: unset;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    margin-bottom: 2rem;
    .responses{
        font-weight: 500;
        font-size: 2.8rem;
        line-height: 4.2rem;
        color: #5B5656;
    }
`