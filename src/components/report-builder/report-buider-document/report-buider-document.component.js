import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRenderedDivs } from '../../../redux/report/report.selectors';
import CustomButton from '../../custom-button/custom-button.component';
import ReportBuilderDescription from '../report-builder-description/report-builder-description.component';
import ReportBuilderGoals from '../report-builder-goal/report-builder-goal.component'
import * as Style from './report-buider-document.styles';

const ReportBuiderDocs = ({ current_report, rendered_div }) => {
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
                {
                    rendered_div.description ? <ReportBuilderDescription /> : null
                }

                {
                    rendered_div.goals_and_objective ? <ReportBuilderGoals goals={current_report.goals} objectives={current_report.objectives} /> : null
                }
            </Style.DocsBody>
        </Style.ReportBuiderDocsContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    rendered_div: selectRenderedDivs
})

export default connect(mapStateToProps)(ReportBuiderDocs);