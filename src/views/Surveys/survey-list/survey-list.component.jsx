import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import { getAllSurveys } from "../../../redux/survey/survey.action";
import { getAllProjects } from "../../../redux/project/project.actions";
import { ButtonContainer, SurveysContainer } from "./survey-list.styles";
import Spinner from "../../../components/spinner/spinner";

const SurveyList = (props) => {
  const { history, surveys, projects, isLoading } = props;

  React.useEffect(() => {
    const fetchProjects = async () => {
      await props.getAllProjects();
    };

    const fetchSurveys = async () => {
      await props.getAllSurveys();
    };

    fetchProjects();

    fetchSurveys();

    console.log(surveys);
  });

  const getProjectName = (id) =>
    projects.find((project) => project._id.toString() === id.toString())?.title;

  return (
    <div>
      <div className="mx-8 relative bg-white flex flex-col md:flew-wrap ">
        <ButtonContainer className="relative bg-white mr-6">
          <div className="px-2 md:px-10 mx-auto w-full">
            <div className="flex justify-end">
              <button
                className="newProjectButton"
                onClick={() => history.push("/surveys/new")}
              >
                <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                New Survey
              </button>
              <button className="sortBy ml-8">Show: All</button>
            </div>
          </div>
        </ButtonContainer>
      </div>
      {isLoading ? (
        <Spinner showSpinner={true} radius={"5rem"} />
      ) : (
        <SurveysContainer
          className="mx-8 relative bg-white card flex flex-col md:flew-wrap"
          style={{
            height: "fit-content",
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
                  {/* <th className="w-2/4 py-6">Status</th> */}
                </tr>
              </thead>
              <tbody>
                {surveys.length > 0 &&
                  surveys.map((survey) => (
                    <tr className="table-border" key={survey._id}>
                      <td className="w-2/4 py-6">
                        <Link
                          to={`/surveys/details/${survey._id}`}
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
                          to={`/surveys/details/${survey._id}`}
                          key={survey._id}
                          className="mb-4"
                        >
                          {survey.name}
                        </Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link
                          to={`/surveys/details/${survey._id}`}
                          key={survey._id}
                          className="mb-4"
                        >
                          {moment(survey.updatedAt).format("DD/MM/YYYY")}
                        </Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link
                          to={`/surveys/details/${survey._id}`}
                          key={survey._id}
                          className="mb-4"
                        >
                          {getProjectName(survey.project)}
                        </Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link
                          to={`/surveys/details/${survey._id}`}
                          key={survey._id}
                          className="mb-4"
                        >
                          {survey.category}
                        </Link>
                      </td>
                      <td className="w-2/4 py-6">
                        <Link
                          to={`/surveys/details/${survey._id}`}
                          key={survey._id}
                          className="mb-4"
                        >
                          {survey?.responses}
                        </Link>
                      </td>
                      {/* <td className="w-2/4 py-6">
                        <Link
                          to={`/surveys/details/${survey._id}`}
                          key={survey._id}
                          className="mb-4"
                        >
                          {survey.staus}
                        </Link>
                      </td> */}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </SurveysContainer>
      )}
    </div>
  );
};

const mapStateToProps = ({
  survey: { isLoading, status, surveys },
  project: { projects },
}) => ({
  isLoading,
  status,
  surveys,
  projects,
});

export default connect(mapStateToProps, { getAllSurveys, getAllProjects })(
  SurveyList
);
