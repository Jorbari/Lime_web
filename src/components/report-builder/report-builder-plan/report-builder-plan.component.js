import React from 'react';
import { connect } from 'react-redux';
import { manageExecutionPlanTab } from '../../../redux/report/report.actions';
import CloseDivButton from '../../close-div-icon-button/close-div-icon-button.component';
import * as Style from './report-builder-plan.styles'

const ReportBuilderPlan = ({manageExecutionPlanTab}) => {
    return (
        <Style.ReportBuilderPlanContainer>
            <Style.Title>
                Plan
                <CloseDivButton onClick={() => manageExecutionPlanTab()} />
            </Style.Title>
            <Style.Body>
                this component doesn't have any thing to fetch from the api
            </Style.Body>
        </Style.ReportBuilderPlanContainer>
    )
}

export default connect(null, { manageExecutionPlanTab })(ReportBuilderPlan)