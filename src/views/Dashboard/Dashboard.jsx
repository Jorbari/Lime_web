import React from "react";
import LineChart from "../../components/LineChart/LineChart";
import BarChart from "../../components/BarChart";
import { ButtonContainer, FlexGridStyle } from "./dashboard.styles";
import "./Dashboard.css";
import { withRouter } from "react-router-dom";
import { setHeading } from '../../redux/layout/layout.action'
import {connect} from 'react-redux'
function Dashboard(props) {
  const { history,setHeading } = props;
  setHeading("Dashboard")

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

export default connect(null,{setHeading})(withRouter(Dashboard));
