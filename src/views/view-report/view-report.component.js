import React from 'react';
import ReportBuiderDocs from '../../components/report-builder/report-buider-document/report-buider-document.component';
import ReportBuiderNav from '../../components/report-builder/report-builder-nav/report-builder-nav.component';
import { ViewReportContainer } from './view-report.styles';

const ViewReport = () => {
    return (
        <ViewReportContainer>
            <ReportBuiderNav />
            <ReportBuiderDocs title={"Saps Project"}/>
        </ViewReportContainer>
    )
}

export default ViewReport;