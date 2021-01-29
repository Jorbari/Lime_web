import React, { useEffect, useState } from "react";
import LineChart from "../../components/LineChart/LineChart";
import BarChart from "../../components/BarChart";
import { ButtonContainer, FlexGridStyle } from "./dashboard.styles";
import "./Dashboard.css";
import { withRouter } from "react-router-dom";
import { setHeading } from "../../redux/layout/layout.action";
import {
  setRecentProject,
  setRecentSurvey,
} from "../../redux/dashboard/dashboard.action";
import { connect } from "react-redux";
import { recentProject } from "../../api/project";
import { recentSurvey } from "../../api//survey";

function Dashboard(props) {
  const { history, setHeading, setRecentProject, setRecentSurvey } = props;
  setHeading("Dashboard");

  useEffect(() => {
    // Fetch recent project
    const fetchRecentProject = async () => {
      try {
        const data = await recentProject();
        const data_length = data.data.data.length;
        setRecentProject(data_length);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch recent survey
    const fetchRecentSurvey = async () => {
      try {
        const data = await recentSurvey();
        const data_length = data.data.data.length;
        setRecentSurvey(data_length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecentProject();
    fetchRecentSurvey();
  }, []);

  return (
    <div>
      <div className="bg-white">
        <div className="bg-white space__padding">
          <div className="w-full">
            <ButtonContainer className="flex flex-wrap">
              <button
                className="newProjectButton"
                onClick={() => history.push("/new-project")}
              >
                New Project
              </button>
              <button
                className="newSurveyButton ml-8"
                onClick={() => history.push("/surveys/new")}
              >
                New Survey
              </button>
            </ButtonContainer>
          </div>
        </div>
        <FlexGridStyle>
          <div className="flex__">
            <div className="flex__one">
              <LineChart />
            </div>
            <div className="flex__two">
              <BarChart />
            </div>
          </div>
        </FlexGridStyle>
      </div>
    </div>
  );
}

export default connect(null, { setHeading, setRecentProject, setRecentSurvey })(
  withRouter(Dashboard)
);
