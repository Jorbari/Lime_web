import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { manageBudgetTab, manageDateAndMilestoneTab, manageDescriptionTab, manageExecutionPlanTab, manageGoalsAndObjectiveTab, manageResourceRequirementTab, manageScopeTab, manageSurveyInformationTab, manageTeamMembersTab } from '../../../redux/report/report.actions';
import { selectRenderedDivs } from '../../../redux/report/report.selectors';
import * as Style from './report-builder-nav.styles';

const ReportBuiderNav = (props) => {

    const {
        getRenderedDiv,
        manageDescription,
        manageGoalsAndObjective,
        manageTeamMembers,
        manageDateAndMilestone,
        manageScope,
        managePlan,
        manageRequirements,
        mapBudget,
        mapSurvey
    } = props

    return (
        <Style.ReportBuiderContainer>
            <Style.ReportBuilderTitle>
                Report builder
           </Style.ReportBuilderTitle>

            <Style.ReportCards selected={getRenderedDiv.description ? true : false} onClick={() => manageDescription()}>
                Description
            </Style.ReportCards>

            <Style.ReportCards selected={getRenderedDiv.goals_and_objective ? true : false} onClick={() => manageGoalsAndObjective()}>
                Goals and objective
            </Style.ReportCards>

            <Style.ReportCards selected={getRenderedDiv.team_members ? true : false} onClick={() => manageTeamMembers()}>
                Team members
            </Style.ReportCards>

            <Style.ReportCards selected={getRenderedDiv.date_and_milestone ? true : false} onClick={() => manageDateAndMilestone()} >
                Dates and milestones
            </Style.ReportCards>

            <Style.ReportCards selected={getRenderedDiv.scope ? true : false} onClick={() => manageScope()}>
                Scope
            </Style.ReportCards>

            <Style.ReportCards selected={getRenderedDiv.execution_plan ? true : false} onClick={() => managePlan()} >
                Execution plan
            </Style.ReportCards>

            <Style.ReportCards selected={getRenderedDiv.resource_requirement ? true : false} onClick={() => manageRequirements()}>
                Resource requirement
            </Style.ReportCards>

            <Style.ReportCards selected={getRenderedDiv.budget ? true : false} onClick={() => mapBudget()}>
                Budget
            </Style.ReportCards>

            <Style.ReportCards selected={getRenderedDiv.survey_information ? true : false} onClick={() => mapSurvey()}>
                Survey information
            </Style.ReportCards>
        </Style.ReportBuiderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    getRenderedDiv: selectRenderedDivs,
})

const mapDispatchToProps = (dispatch) => {
    return {
        manageDescription: () => dispatch(manageDescriptionTab()),
        manageGoalsAndObjective: () => dispatch(manageGoalsAndObjectiveTab()),
        manageTeamMembers: () => dispatch(manageTeamMembersTab()),
        manageDateAndMilestone: () => dispatch(manageDateAndMilestoneTab()),
        manageScope: () => dispatch(manageScopeTab()),
        managePlan: () => dispatch(manageExecutionPlanTab()),
        manageRequirements: () => dispatch(manageResourceRequirementTab()),
        mapBudget: () => dispatch(manageBudgetTab()),
        mapSurvey: () => dispatch(manageSurveyInformationTab())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportBuiderNav);
