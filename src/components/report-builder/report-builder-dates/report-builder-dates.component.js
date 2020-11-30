import React from 'react';
import { connect } from 'react-redux';
import CloseDivButton from '../../close-div-icon-button/close-div-icon-button.component';
import * as Style from './report-builder-dates.styles'
import { manageDateAndMilestoneTab } from '../../../redux/report/report.actions'
import moment from 'moment';

const ReportBuilderDates = ({ startDate, endDate, manageDateAndMilestoneTab }) => {
    return (
        <Style.ReportBuilderDateContainer>
            <Style.Title>
                Dates And Milestone
                <CloseDivButton onClick={() => manageDateAndMilestoneTab()} />
            </Style.Title>
            <Style.Body>
                <Style.DateBar>
                    <h3>Date Started</h3>
                    <p>{moment(startDate).format("Do of MMMM, YYYY")}</p>
                </Style.DateBar>
                <Style.DateBar>
                    <h3>Date Ended</h3>
                    <p>{moment(endDate).format("Do of MMMM, YYYY")}</p>
                </Style.DateBar>
            </Style.Body>
        </Style.ReportBuilderDateContainer>
    )
}
export default connect(null, { manageDateAndMilestoneTab })(ReportBuilderDates)