import React from 'react';
import * as Style from "./report-builder-goal.styles";
const ReportBuilderGoals = () => {
    return (
        <Style.ReportBuilderGoalContainer>
            <Style.Title>
                Goals and Objective
            </Style.Title>

            <Style.GoalsList>
                <h3>Goals</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
            </Style.GoalsList>

            <Style.GoalsList>
                <h3>Objectives</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
            </Style.GoalsList>
        </Style.ReportBuilderGoalContainer>
    )
}

export default ReportBuilderGoals