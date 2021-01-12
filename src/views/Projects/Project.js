import React, { useState } from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { connect } from "react-redux";

import {
  getSingleProject,
  deleteProject,
} from "../../redux/project/project.actions";

import Summary from "./Summary";
import Survey from "./Survey";
import Team from "./Team";
import ExecutionPlan from "./ExecutionPlan";
import Budget from "./Budget";
import { getSingleProjectRequest } from "../../api/project";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/spinner";

const SapsProjectContainer = styled.div`
  .sapsHeader {
    font-style: normal;
    font-size: 36px;
    line-height: 54px;
    color: #a4d4ae;
  }

  .sapsTable {
    width: 1000px;
    border: 0.5px solid #7fcd91;
    border-left: none;
    border-right: none;
  }

  .borderLine {
    height: 85.19px;
    border-right: 1px solid #7fcd91;
  }

  .borderLineLeft {
    height: 85.19px;
    border-left: 1px solid #7fcd91;
  }

  .deleteProjectText {
    position: relative;
    right: -58.8rem;
    top: -21px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: underline;
    /* margin-right: -200px; */
    color: #dc4343;
    transform: matrix(1, 0.01, -0.01, 1, 0, 0);
  }

  .react-tabs__tab-list {
    margin-left: 2rem !important;
  }

  .tab__buttons {
    padding: 2.6rem 0 0.8rem 0;
    display: flex;
    justify-content: flex-end;
  }
  .tab__buttons > .btn {
    color: #5b5656;
    font-size: 1.8rem;
    padding: 1.1rem 1.8rem;
    background-color: #b6e6bd;
    border-radius: 1rem;
    text-decoration: none;
    text-decoration: none;
  }

  .tab {
    display: flex;
  }
  .tab > .tab__list {
    color: #5b5656;
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .tab__list.react-tabs__tab--selected {
    color: #5b5656;
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 1px solid #5b5656;
  }
  .tab > .tab__list:not(:last-child) {
    margin-right: 4.2rem;
  }
`;

const Project = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    history,
    projects,
    deleteProject,
    match: {
      params: { id },
    },
  } = props;
  const [currentProject, setCurrentProject] = useState({});
  const [currentTab, setCurrentTab] = useState(0);
  // For triggering new budget entry modal
  const [modalShow, setModalShow] = React.useState(false);

  React.useEffect(() => {
    const val = async () => {
      const value = await getSingleProjectRequest(id);
      console.log(value);
      if (value.status === 200) {
        setIsLoading(false);
        setCurrentProject(value.data.data);
        console.log(currentProject);
      }
    };

    val();
  }, []);

  return (
    <>
      <div className="relative bg-white">
        {isLoading ? (
          <Spinner showSpinner={true} radius={"5rem"} />
        ) : (
          <SapsProjectContainer className="relative bg-white pb-32">
            <div className="tab__buttons">
              {currentTab === 1 ? (
                <Link className="btn" to="/surveys/new">
                  <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                  New Survey
                </Link>
              ) : currentTab === 3 ? (
                <button className="btn">
                  <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                  New entry
                </button>
              ) : currentTab === 4 ? (
                <button className="btn" onClick={() => setModalShow(true)}>
                  <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                  New entry budget
                </button>
              ) : (
                ""
              )}

              {/* <button className="btn">New entry</button>
              <button className="btn">New entry</button> */}
            </div>

            <Tabs>
              <TabList className="tab">
                <Tab className="tab__list" onClick={() => setCurrentTab(0)}>
                  Summary
                </Tab>
                <Tab className="tab__list" onClick={() => setCurrentTab(1)}>
                  Survey
                </Tab>
                <Tab className="tab__list" onClick={() => setCurrentTab(2)}>
                  Team
                </Tab>
                <Tab className="tab__list" onClick={() => setCurrentTab(3)}>
                  Execution plan
                </Tab>
                <Tab className="tab__list" onClick={() => setCurrentTab(4)}>
                  Budget
                </Tab>
              </TabList>

              <div style={{ width: "77%" }}>
                <TabPanel>
                  <Summary
                    project={currentProject}
                    history={history}
                    deleteProject={deleteProject}
                    projects={projects}
                  />
                </TabPanel>
              </div>
              <TabPanel>
                <Survey />
              </TabPanel>
              <TabPanel>
                <Team />
              </TabPanel>
              <TabPanel>
                <ExecutionPlan />
              </TabPanel>
              <TabPanel>
                <Budget
                  project={currentProject}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  openDialog={() => setModalShow(true)}
                />
              </TabPanel>
            </Tabs>
          </SapsProjectContainer>
        )}
      </div>
    </>
  );
};

const mapStateToProps = ({
  project: { isLoading, status, project, projects },
}) => ({
  isLoading,
  status,
  project,
  projects,
});

export default connect(mapStateToProps, { getSingleProject, deleteProject })(
  Project
);
