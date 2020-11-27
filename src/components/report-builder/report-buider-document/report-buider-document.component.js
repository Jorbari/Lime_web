import React from 'react';
import CustomButton from '../../custom-button/custom-button.component';
import ReportBuilderDescription from '../report-builder-description/report-builder-description.component';
import ReportBuilderGoals from '../report-builder-goal/report-builder-goal.component'
import * as Style from './report-buider-document.styles';

const ReportBuiderDocs = ({ current_report }) => {
    return (
        <Style.ReportBuiderDocsContainer>
            <Style.DocsTopNavContainer>
                <Style.DocsTopNav>
                    <CustomButton primary>
                        Print Document
                    </CustomButton>
                    <CustomButton primary>
                        Save As PDF
                    </CustomButton>
                </Style.DocsTopNav>
            </Style.DocsTopNavContainer>
            <Style.DocsBody>
                <Style.Title>
                    {current_report.title}
                </Style.Title>
                <ReportBuilderDescription />
                <ReportBuilderGoals />
            </Style.DocsBody>
        </Style.ReportBuiderDocsContainer>
    )
}


export default ReportBuiderDocs;