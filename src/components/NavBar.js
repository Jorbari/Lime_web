import React from "react";
import styled from "styled-components";
import {withRouter} from 'react-router-dom'
import UserDropdown from "./UserDropdown.js";
import { 
  NavBar,
  NavBarContainer
} from './NavBar.styles'

//can be changed to pull from state current route name
const setNavBarName = (name)=>{
  return name.slice(1).replace( /-/g,' ')
}

const Navbar = (props) => {
  const {location} = props;
  return (
    <>
    <NavBarContainer>
      <NavBar>
          <p className="">
            {(setNavBarName(location.pathname))}
          </p>
          <UserDropdown />
      </NavBar>
    </NavBarContainer>
    </>
  );
}

export default withRouter(Navbar)