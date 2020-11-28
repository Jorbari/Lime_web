import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { manageDescriptionTab, manageGoalsAndObjectiveTab } from '../../../redux/report/report.actions';
import { selectRenderedDivs } from '../../../redux/report/report.selectors';
import * as Style from './report-builder-nav.styles';

const ReportBuiderNav = (props) => {

    const { getRenderedDiv, manageDescription, manageGoalsAndObjective } = props
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

            <Style.ReportCards>
                Team members
            </Style.ReportCards>

            <Style.ReportCards>
                Dates and milestones
            </Style.ReportCards>

            <Style.ReportCards>
                Scope
            </Style.ReportCards>

            <Style.ReportCards>
                Execution plan
            </Style.ReportCards>

            <Style.ReportCards>
                Resource requirement
            </Style.ReportCards>

            <Style.ReportCards>
                Budget
            </Style.ReportCards>

            <Style.ReportCards>
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
        manageGoalsAndObjective: () => dispatch(manageGoalsAndObjectiveTab())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportBuiderNav);
