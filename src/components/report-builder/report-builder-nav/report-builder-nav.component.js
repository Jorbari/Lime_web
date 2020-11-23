import React from 'react';
import * as Style from './report-builder-nav.styles';

const ReportBuiderNav = () => {
    return (
        <Style.ReportBuiderContainer>
            <Style.ReportBuilderTitle>
                Report builder
           </Style.ReportBuilderTitle>

           <Style.ReportCards>
                Description
            </Style.ReportCards>

            <Style.ReportCards>
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

export default ReportBuiderNav;