import React from "react";
import styled from "styled-components";
import { Modal } from "react-responsive-modal";
// import { Row, Col } from "react-bootstrap";

import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import NewProject from "../../components/NewProject";
// import ProjectCards from "../../components/ProjectCards";

import { decodeUserObject } from "../../api/helpers";

import "./Dashboard.css";

const ButtonContainer = styled.div`
  .newProjectButton {
    padding: 8px 13px;
    width: 152px;
    height: 37.5px;
    background: #b6e6bd;
    border-radius: 7.5px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #5b5656;
  }

  .newSurveyButton {
    padding: 8px 13px;
    width: 142px;
    height: 37.5px;
    background: #b6e6bd;
    border-radius: 7.5px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #5b5656;
  }

  /* .react-responsive-modal-modal {
    width: 1068px;
    height: 666px;
  } */
`;

const ModalHeader = styled.h1`
  /* position: absolute; */
  width: 204px;
  height: 42px;
  /* left: 72px; */
  /* top: 66px; */
  margin: 20px;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  /* identical to box height */

  color: #7fcd91;
`;

const InputStyle = styled.input`
  border-bottom: 1px solid rgba(91, 86, 86, 0.5);

  ::placeholder {
    /* position: absolute; */
    width: 233.87px;
    height: 30px;
    /* left: 72px; */
    /* top: 173px; */

    font-family: "Poppins", sans-serif;
    /* font-style: normal; */
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height */

    color: #5b5656;
    /* background-color: red;
    margin-left: -2rem; */
  }

  /* input[type="text"] {
    margin-left: -12rem;
  } */
`;

const CreateButton = styled.button`
  /* display: flex;
  flex-direction: row; */
  padding: 11px 18px;

  /* position: absolute; */
  width: 171px;
  height: 49px;
  /* left: 449px; */
  /* top: 551px; */

  background: #b6e6bd;
  border-radius: 10px;
  margin-left: 19rem;
`;

function Dashboard(props) {
  const { history } = props;
  const [newProjectView, setNewProjectView] = React.useState(false);

  const toggleNewProjectView = () => {
    setNewProjectView(!newProjectView);
  };

  return (
    <div>
      {newProjectView ? (
        <>
          <SideBar
            toggleNewProjectView={toggleNewProjectView}
            history={history}
          />
          <div className="relative md:ml-64 new-project-container">
            <NavBar title="New Project" />
            {/* Header height: "400px" */}
            <div className="relative bg-white md:pt-32 pb-32 pt-12">
              <NewProject
                toggleNewProjectView={toggleNewProjectView}
                history={history}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <SideBar
            toggleNewProjectView={toggleNewProjectView}
            history={history}
          />
          <div className="relative md:ml-64 bg-white">
            <NavBar title="Dashboard" />
            {/* Header height: "400px" */}
            <div className="relative bg-white md:pt-32 pb-32 pt-12">
              <div className="px-4 md:px-10 mx-auto w-full">
                <ButtonContainer className="flex flex-wrap">
                  <button
                    className="newProjectButton"
                    onClick={toggleNewProjectView}
                  >
                    New Project
                  </button>
                  <button className="newSurveyButton ml-8">New Survey</button>
                </ButtonContainer>
              </div>
            </div>

            <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <div className="flex flex-wrap">
                <LineChart />
                <BarChart />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
