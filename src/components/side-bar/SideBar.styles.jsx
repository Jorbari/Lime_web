import styled from 'styled-components'
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.nav`
    background: #edeeed;
    width: 29.5rem;
    padding: 3rem 3.9rem;
    height: 100vh;
    max-height: 100vh;
    overflow-y: auto;
    display:flex;
    flex-direction: column;
`

export const SidebarHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 9.5rem;
`

export const SidebarList = styled.ul`
    list-style-type: none;
`

export const SidebarListItem = styled.li`
    list-style-type: none;
    &:not(:last-child){
        margin-bottom: 2rem;
    }
    & a{
        text-decoration: none;
    }
`

export const SidebarListLink = styled(NavLink)`
    display: flex;
    align-items: center;
    & > :not(:last-child){
     margin-right: 2rem;
    }

    text-decoration: none;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.7rem;
    color: #5B5656;
    padding: .8rem 1.5rem;

    &:hover, &.active{
        background: rgba(111, 107, 107, 0.15);
        border-radius: 1rem;
        color: currentColor;
    }
`
export const SidebarFooter = styled.footer`
    margin-top: auto;
    border-top: 0.5px solid rgba(91, 86, 86, 0.5);
    padding-top: 2.5rem
`