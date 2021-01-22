import React from 'react';
import { connect } from 'react-redux';
import { manageDescriptionTab } from '../../../redux/report/report.actions';
import CloseDivButton from '../../close-div-icon-button/close-div-icon-button.component';
import * as Style from './report-builder-description.styles';

const ReportBuilderDescription = ({ description, manageDescriptionTab }) => {

    return (
        <Style.ReportBuilderDescriptionContainer>
            <Style.Title>
                Description
                <CloseDivButton onClick={() => manageDescriptionTab()} />
            </Style.Title>
            <Style.Description>
               {description}
            </Style.Description>
        </Style.ReportBuilderDescriptionContainer>
    )
}

export default connect(null, { manageDescriptionTab })(ReportBuilderDescription)