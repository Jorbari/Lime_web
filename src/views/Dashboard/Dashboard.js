import React from "react";
import styled from "styled-components";
import { Modal } from "react-responsive-modal";
// import { Row, Col } from "react-bootstrap";

import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
// import ProjectCards from "../../components/ProjectCards";

const ButtonContainer = styled.div`
  .newProjectButton {
    padding: 11px 18px;
    width: 203.11px;
    height: 49px;
    background: #b6e6bd;
    border-radius: 10px;
  }

  .newSurveyButton {
    padding: 11px 18px;
    width: 190px;
    height: 49px;
    background: #b6e6bd;
    border-radius: 10px;
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

function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  function ModalContainer(props) {
    return (
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        style={{ borderRadius: "40px" }}
        // style={styles}
        // className="modal-container"
      >
        <ModalHeader>Create Project</ModalHeader>
        {props.children}
      </Modal>
    );
  }

  return (
    <>
      <SideBar />
      <div className="relative md:ml-64 bg-white">
        <NavBar />
        {/* Header height: "400px" */}
        <div className="relative bg-white md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <ButtonContainer className="flex flex-wrap">
              <button className="newProjectButton" onClick={onOpenModal}>
                New Project
              </button>
              <button className="newSurveyButton ml-8">New Survey</button>
            </ButtonContainer>
          </div>
        </div>

        <ModalContainer style={{ borderRadius: "40px" }}>
          <form className="w-full max-w-lg" style={{ width: "1068px" }}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="px-3" style={{ width: "71.6%" }}>
                <label
                  className="block tracking-wide text-gray-700 text-base mb-2"
                  for="grid-password"
                >
                  Project title:
                </label>
                <InputStyle
                  className="appearance-none block w-full text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  placeholder="LAPL Project"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-base mb-2"
                  for="grid-first-name"
                >
                  Project Manager:
                </label>
                <InputStyle
                  style={{ width: "350px" }}
                  className="appearance-none block w-full text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Yasmin Olabanjo"
                />
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  className="block tracking-wide text-gray-700 text-base mb-2"
                  for="grid-last-name"
                >
                  Category:
                </label>
                <InputStyle
                  style={{ width: "350px" }}
                  className="appearance-none block w-10/12 text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Select category"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="px-3" style={{ width: "71.6%" }}>
                <label
                  className="block tracking-wide text-gray-700 text-base mb-2"
                  for="grid-password"
                >
                  Description
                </label>
                <InputStyle
                  className="appearance-none block w-full text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  placeholder="LAPL Project"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="px-3" style={{ width: "71.6%" }}>
                <label
                  className="block tracking-wide text-gray-700 text-base mb-2"
                  for="grid-password"
                >
                  Add other details
                </label>
              </div>
            </div>
            <CreateButton>Create Project</CreateButton>
          </form>
        </ModalContainer>

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            <LineChart />
            <BarChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
