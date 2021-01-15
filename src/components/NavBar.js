import React from "react";
import styled from "styled-components";
import {withRouter} from 'react-router-dom'
import UserDropdown from "./UserDropdown.js";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {selectHeading} from '../redux/layout/layout.selector'
import { 
  NavBar,
  NavBarContainer
} from './NavBar.styles'

//can be changed to pull from state current route name
const setNavBarName = (name)=>{
  return name.slice(1).replace( /-/g,' ')
}

const Navbar = (props) => {
  const {location,heading} = props;
  console.log(props)
  return (
    <>
    <NavBarContainer>
      <NavBar>
          <p className="">
            {heading}
          </p>
          <UserDropdown />
      </NavBar>
    </NavBarContainer>
    </>
  );
}
const matchStateToProps = createStructuredSelector({
  heading: selectHeading,
});
export default connect(matchStateToProps)(withRouter(Navbar))