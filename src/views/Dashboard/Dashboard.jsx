import React from "react";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import {ButtonContainer} from './dashboard.styles'
import "./Dashboard.css";
import {withRouter} from 'react-router-dom'


function Dashboard(props) {
  const { history } = props;

  return (
    <div>
          <div className="bg-white">
            <div className="bg-white md:pt-32 pb-32 pt-12">
              <div className="px-4 md:px-10 mx-auto w-full">
                <ButtonContainer className="flex flex-wrap">
                  <button
                    className="newProjectButton"
                    onClick={()=> history.push('/new-project')}
                  >
                    New Project
                  </button>
                  <button className="newSurveyButton ml-8">New Survey</button>
                </ButtonContainer>
              </div>
            </div>

            <div className="">
              <div className="flex flex-wrap">
                <LineChart />
                <BarChart />
              </div>
            </div>
          </div>
    </div>
  );
}

export default withRouter(Dashboard);
