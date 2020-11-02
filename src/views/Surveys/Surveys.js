import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import { getAllSurveys } from "../../reducers/survey";
import { getAllProjects } from "../../reducers/project";

import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import NewSurvey from "../../components/NewSurvey";

const SurveysContainer = styled.div`
  margin-top: 1rem;
  border: 1px solid #7fcd91;
  border-radius: 10px;

  .survey-table {
    border-left: none;
    border-right: none;
  }

  .table-border {
    border-bottom: 0.5px solid #7fcd91;
  }
`;

const ButtonContainer = styled.div`
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

function Surveys(props) {
  const { history, surveys, projects } = props;
  const [newProjectView, setNewProjectView] = React.useState(false);
  const [newSurveyView, setNewSurveyView] = React.useState(false);

  React.useEffect(() => {
    const fetchSurveys = async () => {
      await props.getAllSurveys();
    };

    const fetchProjects = async () => {
      await props.getAllProjects();
    };

    fetchProjects();

    fetchSurveys();
  }, []);

  console.log("hey", projects);

  const getProjectName = id =>
    projects.find(project => project._id.toString() === id.toString()).title;

  const toggleNewProjectView = () => {
    setNewProjectView(!newProjectView);
  };

  const toggleNewSurveyView = () => {
    setNewSurveyView(!newSurveyView);
  };
  return (
    <div>
      {newSurveyView ? (
        <>
          <SideBar
            toggleNewSurveyView={toggleNewSurveyView}
            toggleNewProjectView={toggleNewProjectView}
            history={history}
          />

          <div
            className="mx-8 relative md:ml-64 bg-white flex flex-col md:flew-wrap new-survey-container "
            style={{ marginLeft: "18rem", marginRight: "2rem" }}
          >
            <NavBar title="Surveys" />
            <div
              className="relative bg-white pb-32"
              style={{ marginTop: "113px" }}
            >
              <NewSurvey
                toggleNewSurveyView={toggleNewSurveyView}
                history={history}
                projects={projects}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <SideBar
            toggleNewSurveyView={toggleNewSurveyView}
            toggleNewProjectView={toggleNewProjectView}
            history={history}
          />

          <div
            className="mx-8 relative md:ml-64 bg-white flex flex-col md:flew-wrap "
            style={{ marginLeft: "18rem", marginRight: "2rem" }}
          >
            <NavBar title="Surveys" />
            <ButtonContainer className="relative bg-white pt-32 mr-6">
              <div className="px-2 md:px-10 mx-auto w-full">
                <div className="flex justify-end">
                  <button
                    className="newProjectButton"
                    onClick={toggleNewSurveyView}
                  >
                    <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                    New Survey
                  </button>
                  <button className="sortBy ml-8">Show: All</button>
                </div>
              </div>
            </ButtonContainer>
          </div>

          <SurveysContainer
            className="mx-8 relative md:ml-64 bg-white card flex flex-col md:flew-wrap"
            style={{
              marginLeft: "18rem",
              marginRight: "2rem",
              height: "fit-content"
            }}
          >
            <div className="flex flex-row">
              <table
                className="survey-table table-fixed ml-4 w-full xl:w-10/12 mb-12 xl:mb-0 pr-4"
                style={{ width: "96%" }}
              >
                <thead>
                  <tr className="table-border">
                    <th className="w-2/4 py-6"></th>
                    <th className="w-2/4 py-6">Name</th>
                    <th className="w-2/4 py-6">Last Modified</th>
                    <th className="w-2/4 py-6">Project</th>
                    <th className="w-2/4 py-6">Category</th>
                    <th className="w-2/4 py-6">Responses</th>
                    <th className="w-2/4 py-6">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {surveys.length > 0 &&
                    surveys.map(survey => (
                      <tr className="table-border" key={survey._id}>
                        <td className="w-2/4 py-6">
                          <Link
                            to={`/surveys/${survey._id}`}
                            key={survey._id}
                            className="mb-4"
                          >
                            <input
                              type="checkbox"
                              className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                            />
                          </Link>
                        </td>
                        <td className="w-2/4 py-6">
                          <Link
                            to={`/surveys/${survey._id}`}
                            key={survey._id}
                            className="mb-4"
                          >
                            {survey.name}
                          </Link>
                        </td>
                        <td className="w-2/4 py-6">
                          <Link
                            to={`/surveys/${survey._id}`}
                            key={survey._id}
                            className="mb-4"
                          >
                            {moment(survey.updatedAt).format("DD/MM/YYYY")}
                          </Link>
                        </td>
                        <td className="w-2/4 py-6">
                          <Link
                            to={`/surveys/${survey._id}`}
                            key={survey._id}
                            className="mb-4"
                          >
                            {getProjectName(survey.project)}
                          </Link>
                        </td>
                        <td className="w-2/4 py-6">
                          <Link
                            to={`/surveys/${survey._id}`}
                            key={survey._id}
                            className="mb-4"
                          >
                            {survey.category}
                          </Link>
                        </td>
                        <td className="w-2/4 py-6">
                          <Link
                            to={`/surveys/${survey._id}`}
                            key={survey._id}
                            className="mb-4"
                          >
                            {survey.response.length}
                          </Link>
                        </td>
                        <td className="w-2/4 py-6">
                          <Link
                            to={`/surveys/${survey._id}`}
                            key={survey._id}
                            className="mb-4"
                          >
                            {survey.staus}
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </SurveysContainer>
        </>
      )}
    </div>
  );
}

const mapStateToProps = ({
  survey: { isLoading, status, surveys },
  project: { projects }
}) => ({
  isLoading,
  status,
  surveys,
  projects
});

export default connect(mapStateToProps, { getAllSurveys, getAllProjects })(
  Surveys
);
