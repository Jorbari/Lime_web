import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getAllProjects } from "../../redux/project/project.actions";

import folder from "../../assets/bigFolder.png";

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
  .pt-32 {
    padding-top: 2.6rem;
  }
  .break-words {
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .break-words > p {
    margin-top: 2.9rem
  }
`;

function Projects(props) {
  const { history, projects } = props;

  React.useEffect(() => {
    console.log(props);
    const fetchProjects = async () => {
      await props.getAllProjects();
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <CardContainer className="relative bg-white card flex flex-col md:flew-wrap">
        <div className="relative bg-white pt-32 mr-6">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div className="flex justify-end">
              <button
                className="newProjectButton"
                onClick={() => history.push("/new-project")}
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
              projects.map((project) => (
                <Link
                  to={`/projects/${project._id}`}
                  key={project._id}
                  className="mb-4"
                >
                  <div className="relative bg-white">
                    <div className="w-full xl:w-4/12 pl-1 pr-1 ml-4 card">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded h-32">

                        {/* <div className="rounded-t mb-0 px-4 bg-transparent card-image-and-text-container">
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
                        </div> */}
                        <section>
                          <img
                                  src={folder}
                                  alt=""
                                />
                        </section>
                        <p className="card-text capitalize">
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
    </div>
  );
}

const mapStateToProps = ({ project: { isLoading, status, projects } }) => ({
  isLoading,
  status,
  projects,
});

export default withRouter(
  connect(mapStateToProps, { getAllProjects })(Projects)
);
