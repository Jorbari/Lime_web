import React from 'react';
import { connect } from 'react-redux';
import { manageBudgetTab } from '../../../redux/report/report.actions';
import CloseDivButton from '../../close-div-icon-button/close-div-icon-button.component';
import * as Style from './report-builder-budget.styles'

const ReportBuilderBudget = ({manageBudgetTab}) => {
    return (
        <Style.ReportBuilderBudgetContainer>
            <Style.Title>
                Budget
                <CloseDivButton onClick={() => manageBudgetTab()} />
            </Style.Title>
            <Style.Body>
                this component doesn't have any thing to fetch from the api
            </Style.Body>
        </Style.ReportBuilderBudgetContainer>
    )
}

export default connect(null, { manageBudgetTab })(ReportBuilderBudget)