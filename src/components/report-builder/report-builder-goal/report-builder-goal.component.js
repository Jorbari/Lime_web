import React from 'react';
import { connect } from 'react-redux';
import * as Style from "./report-builder-goal.styles";
import { manageGoalsAndObjectiveTab } from '../../../redux/report/report.actions'
import CloseDivButton from '../../close-div-icon-button/close-div-icon-button.component'
const ReportBuilderGoals = ({ objectives, goals, manageGoalsAndObjectiveTab }) => {
    return (
        <Style.ReportBuilderGoalContainer>
            <Style.Title>
                Goals and Objective
                <CloseDivButton onClick={() => manageGoalsAndObjectiveTab()} />
            </Style.Title>

            <Style.GoalsList>
                <h3>Goals</h3>
                <p>{goals}</p>
            </Style.GoalsList>

            <Style.GoalsList>
                <h3>Objectives</h3>
                {/* <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul> */}
                <p>{objectives}</p>
            </Style.GoalsList>
        </Style.ReportBuilderGoalContainer>
    )
}

export default connect(null, { manageGoalsAndObjectiveTab })(ReportBuilderGoals)