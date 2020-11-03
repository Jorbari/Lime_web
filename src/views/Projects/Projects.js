import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getAllProjects } from "../../reducers/project";

import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import folder from "../../assets/bigFolder.png";
import NewProject from "../../components/NewProject";

const CardContainer = styled.div`
  border: none;

  .card {
    width: 286.28px;
    height: 204px;
    border: 1px solid #7fcd91;
    box-sizing: border-box;
    border-radius: 10px;
  }

  .card-image-and-text-container {
    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .card-text {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #5b5656;
  }

  .newProjectButton {
    padding: 11px 18px;
    width: 203.11px;
    height: 49px;
    background: #b6e6bd;
    border-radius: 10px;
  }

  .sortBy {
    border: 1px solid #7fcd91;
    box-sizing: border-box;
    border-radius: 10px;
    width: 176px;
    height: 49px;
  }
`;

function Projects(props) {
  const { history, projects } = props;
  const [newProjectView, setNewProjectView] = React.useState(false);

  React.useEffect(() => {
    const fetchProjects = async () => {
      await props.getAllProjects();
    };

    fetchProjects();
  }, []);

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
          <CardContainer className="relative md:ml-64 bg-white card flex flex-col md:flew-wrap">
            <NavBar />
            <div className="relative bg-white pt-32 mr-6">
              <div className="px-4 md:px-10 mx-auto w-full">
                <div className="flex justify-end">
                  <button
                    className="newProjectButton"
                    onClick={toggleNewProjectView}
                  >
                    <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                    New Project
                  </button>
                  <button className="sortBy ml-8">New Survey</button>
                </div>
              </div>
            </div>

            <div className="flex flex-row pt-8">
              <div className="flex flex-wrap">
                {projects.length > 0 &&
                  projects.map(project => (
                    <Link
                      to={`/projects/${project._id}`}
                      key={project._id}
                      className="mb-4"
                    >
                      <div className="relative bg-white">
                        <div className="w-full xl:w-4/12 pl-1 pr-1 ml-4 card">
                          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded h-32">
                            <div className="rounded-t mb-0 px-4 bg-transparent card-image-and-text-container">
                              <div className="flex flex-wrap items-center">
                                <div className="relative w-full max-w-full flex-grow flex-1">
                                  <img
                                    src={folder}
                                    alt=""
                                    width="57.39px"
                                    height="50px"
                                  />
                                </div>
                              </div>
                            </div>
                            <p className="card-text mt-4 capitalize">
                              {project.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </CardContainer>
        </>
      )}
    </div>
  );
}

const mapStateToProps = ({ project: { isLoading, status, projects } }) => ({
  isLoading,
  status,
  projects
});

export default connect(mapStateToProps, { getAllProjects })(Projects);
