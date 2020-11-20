import React from "react";
import styled from "styled-components";

import dashboardIcon from "../../assets/dashboard.svg";
import projectIcon from "../../assets/project.svg";
import { ReactComponent as Logo } from "../../assets/limeLogo.svg";
import surveyIcon from "../../assets/surveys.svg";
import reportIcon from "../../assets/report.svg";
import profileIcon from "../../assets/profile.svg";
import LogoutIcon from "../../assets/logout.svg";
import {matchPath} from 'react-router';
import "./SideBar.css";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../../api/helpers";

import {
  SidebarContainer,
  SidebarHeader,
  SidebarList,
  SidebarListItem,
  SidebarListLink,
  SidebarFooter
} from './SideBar.styles'

const SideBar = (props) => {
  const {history, location } = props;
  console.log(props)
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  const goToDashboard = () => {
    history.push("/");
    // toggleNewProjectView();
  };

  const goToProjects = () => {
    history.push("/projects");
    // toggleNewProjectView();
  };

  const isActive = (path)=>{
    return !!matchPath(
      location.pathname,
      path
    )
  }

  return (
    <>
      <SidebarContainer className="">
          <SidebarHeader>
            <Logo></Logo>
            <Link to="/"> &larr; &nbsp; Back</Link>
          </SidebarHeader>

          <SidebarList>
            <SidebarListItem>
              <SidebarListLink to="/" exact  activeClassName="active">
              <img
                  alt=""
                  src={dashboardIcon}
                />
                <p >
                  Dashboard
                </p>
              </SidebarListLink>
            </SidebarListItem>
            
            <SidebarListItem>
              <SidebarListLink to="/projects" exact  activeClassName="active">
              <img
                  alt=""
                  src={projectIcon}
                />
                <p>
                  Projects
                </p>
              </SidebarListLink>
            </SidebarListItem>

            <SidebarListItem>
              <SidebarListLink to="/surveys" exact  activeClassName="active">
              <img
                  alt="survey icon"
                  src={surveyIcon}
                />
                <p>
                  Surveys
                </p>
              </SidebarListLink>
            </SidebarListItem>

            <SidebarListItem>
              <SidebarListLink to="/report" exact  activeClassName="active">
              <img
                  alt=""
                  src={reportIcon}
                />
                <p>
                  Report
                </p>
              </SidebarListLink>
            </SidebarListItem>

            <SidebarListItem>
              <SidebarListLink to="/profile" exact  activeClassName="active">
              <img
                  alt=""
                  src={profileIcon}
                />
                <p>
                  Profile
                </p>
              </SidebarListLink>
            </SidebarListItem>          
          </SidebarList>
          <SidebarFooter>
            <SidebarListItem>
                <SidebarListLink to="#"  >
                <img
                    alt="logout icon"
                    src={LogoutIcon}
                  />
                  <p
                  >
                    Logout
                  </p>
                </SidebarListLink>
              </SidebarListItem>
          </SidebarFooter>
      </SidebarContainer>
    </>
  );
}
export default withRouter(SideBar)
