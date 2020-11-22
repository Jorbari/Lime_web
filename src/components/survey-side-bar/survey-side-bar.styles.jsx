import styled,{css} from 'styled-components';

const animationForwardStyles = css`
    transition: all .4s ease-in;
    width: 28.5rem;
`

const animationBackwardStyles = css`
    transition: all .4s ease-in;
    width: 0;
`

export const MainContainer = styled.div`
    height: 100%;
    max-height: 100%;
    background: #f5f5f5;
    border: 1.5px solid #F8F8FF;
    display:flex;
    overflow: hidden;
`

export const Nav = styled.nav`
    width: 5rem;
    margin: 7rem 0;
    border-right: ${props=>props.showNav?'1px solid #6F6B6B': null};
`

export const NavItem = styled.div`
    width: 100%;
    height: 4.4rem;
    display: flex;
    align-items:center;
    justify-content: center;
    background: transparent;
    cursor: pointer;
    &.active{
        background: #fff;
        & path{
            fill:#7FCD91;
        }
    }
`
const setAnimation = (props)=>{
    return props.showNav? animationForwardStyles: animationBackwardStyles
}

export const ContentContainer = styled.div`
    width:  28.5rem;
    ${setAnimation}
`


export const FormBuilderContainer = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: max-content 1fr;
`
