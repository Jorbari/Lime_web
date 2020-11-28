import React from 'react';
import { connect } from 'react-redux';
import { manageResourceRequirementTab } from '../../../redux/report/report.actions';
import CloseDivButton from '../../close-div-icon-button/close-div-icon-button.component';
import * as Style from './report-builder-requirement.styles'
const ReportBuilderRequirement = ({ requirements, manageResourceRequirementTab }) => {
    return (
        <Style.ReportBuilderRequirementContainer>
            <Style.Title>
                Resource Requirement
                <CloseDivButton onClick={() => manageResourceRequirementTab()} />
            </Style.Title>
            <Style.Body>
                <p>{requirements}</p>
            </Style.Body>
        </Style.ReportBuilderRequirementContainer>
    )
}

export default connect(null, { manageResourceRequirementTab })(ReportBuilderRequirement)