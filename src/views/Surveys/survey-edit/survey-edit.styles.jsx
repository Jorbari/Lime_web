import styled from 'styled-components';
import { ReactComponent as caret } from "../../../assets/caret-down.svg";
import { ReactComponent as eye } from "../../../assets/preview-eye.svg";
import {variables} from '../../../App.styles'
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: ${`calc(100vh - ${variables.navHeight})`};
`

export const ButtonContainer = styled.div`
    padding: 2.7rem;
    padding-bottom:unset;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & >:not(:last-child){
        margin-right: 3rem;
    }
`

export const Nav = styled.nav`
    font-weight: normal;
    font-size: 1.8rem;
    padding: 1rem 0;
    color: #5B5656;
    border-bottom: 0.5px solid rgba(91, 86, 86, 0.5);
    margin-bottom: 3.4rem;
`

export const NavItem = styled.span`
    cursor: pointer;
    padding: 1rem;
    background:unset;
    &.active{
        font-weight: bold;
        border-bottom: 1px solid #5B5656;
    }
`

export const FormBuilderContainer = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-gap: 3rem;
    margin-bottom: 3.4rem;
    min-height: 0;
`

export const Eye = styled(eye)`

`
export const CaretDown = styled(caret)`

`
