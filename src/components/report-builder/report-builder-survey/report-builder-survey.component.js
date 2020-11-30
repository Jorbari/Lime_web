import React from 'react';
import { connect } from 'react-redux';
import { manageSurveyInformationTab } from '../../../redux/report/report.actions';
import CloseDivButton from '../../close-div-icon-button/close-div-icon-button.component';
import * as Style from './report-builder-survey.styles'

const ReportBuilderSurvey = ({ manageSurveyInformationTab }) => {
    return (
        <Style.ReportBuilderSurveyContainer>
            <Style.Title>
                Survey information
                <CloseDivButton onClick={() => manageSurveyInformationTab()} />
            </Style.Title>
            <Style.Body>
                this component doesn't have any thing to fetch from the api
            </Style.Body>
        </Style.ReportBuilderSurveyContainer>
    )
}

export default connect(null, { manageSurveyInformationTab })(ReportBuilderSurvey)