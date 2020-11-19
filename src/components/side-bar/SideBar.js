import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import dashboardIcon from "../../assets/dashboard.svg";
import projectIcon from "../../assets/project.svg";
import surveyIcon from "../../assets/surveys.svg";
import reportIcon from "../../assets/report.svg";
import profileIcon from "../../assets/profile.svg";
import LogoutIcon from "../../assets/logout.svg";

import "./SideBar.css";

import { logout } from "../../api/helpers";

const SidebarContainer = styled.nav`
  background: #edeeed !important;
  width: 256px;
`;

export default function SideBar(props) {
  const { toggleNewProjectView, history } = props;
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  const goToDashboard = () => {
    history.push("/");
    toggleNewProjectView();
  };

  const goToProjects = () => {
    history.push("/projects");
    toggleNewProjectView();
  };
  return (
    <>
      <SidebarContainer className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-right md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold py-4 px-0 pr-0"
            to="/"
          >
            Back
          </Link>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <ul className="md:flex-col md:min-w-full flex flex-col list-none sidebar-nav">
              <li className="items-center sidebar-nav_item">
                <Link
                  className="text-gray-800 text-xs font-bold block"
                  to="/"
                  onClick={() => goToDashboard()}
                >
                  <img
                    alt=""
                    src={dashboardIcon}
                    className="opacity-75 mr-2 text-sm"
                  />
                  <p style={{ marginTop: "-1.23rem", marginLeft: "2rem" }}>
                    Dashboard
                  </p>
                </Link>
              </li>

              <li className="items-center  sidebar-nav_item">
                <Link
                  className="text-gray-800 hover:text-gray-600 text-xs  py-3 font-bold block"
                  to="/projects"
                  onClick={() => goToProjects()}
                >
                  <img
                    alt=""
                    src={projectIcon}
                    className="opacity-75 mr-2 text-sm"
                  />
                  <p style={{ marginTop: "-1.23rem", marginLeft: "2rem" }}>
                    Projects
                  </p>
                </Link>
              </li>

              <li className="items-center  sidebar-nav_item">
                <Link
                  className="text-gray-800 hover:text-gray-600 text-xs  py-3 font-bold block"
                  to="/surveys"
                >
                  <img
                    alt=""
                    src={surveyIcon}
                    className="opacity-75 mr-2 text-sm"
                  />
                  <p style={{ marginTop: "-1.23rem", marginLeft: "2rem" }}>
                    Surveys
                  </p>
                </Link>
              </li>

              <li className="items-center  sidebar-nav_item">
                <Link
                  className="text-gray-800 hover:text-gray-600 text-xs  py-3 font-bold block"
                  to="/report"
                >
                  <img
                    alt=""
                    src={reportIcon}
                    className="opacity-75 mr-2 text-sm"
                  />
                  <p style={{ marginTop: "-1.23rem", marginLeft: "2rem" }}>
                    Report
                  </p>
                </Link>
              </li>

              <li className="items-center  sidebar-nav_item">
                <Link
                  className="text-gray-800 hover:text-gray-600 text-xs  py-3 font-bold block"
                  to="/profile"
                >
                  <img
                    alt=""
                    src={profileIcon}
                    className="opacity-75 mr-2 text-sm"
                  />
                  <p style={{ marginTop: "-1.23rem", marginLeft: "2rem" }}>
                    Profile
                  </p>
                </Link>
              </li>

              <li className="items-center  sidebar-nav_item mt-auto logout">
                <Link
                  className="text-gray-800 hover:text-gray-600 text-xs  py-3 font-bold block"
                  to="#"
                  onClick={() => logout()}
                >
                  <img
                    alt=""
                    src={LogoutIcon}
                    className="opacity-75 mr-2 text-sm"
                  />
                  <p
                    style={{
                      marginTop: "-1.23rem",
                      marginLeft: "2rem",
                      color: "#DC4343"
                    }}
                  >
                    Logout
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </SidebarContainer>
    </>
  );
}
