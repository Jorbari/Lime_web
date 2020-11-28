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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
            </Style.Description>
        </Style.ReportBuilderDescriptionContainer>
    )
}

export default connect(null, { manageDescriptionTab })(ReportBuilderDescription)