import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReportBuiderDocs from '../../components/report-builder/report-buider-document/report-buider-document.component';
import ReportBuiderNav from '../../components/report-builder/report-builder-nav/report-builder-nav.component';
import { ViewReportContainer } from './view-report.styles';
import { getAProjectReport } from '../../redux/report/report.actions'
import { createStructuredSelector } from 'reselect';
import { selectCurrentReport } from '../../redux/report/report.selectors';
const ViewReport = ({ current_report, getAProjectReport, match }) => {
    useEffect(() => {
        getAProjectReport(match.params.reportId)
    })
    return (
        <ViewReportContainer>
            <ReportBuiderNav />
            <ReportBuiderDocs current_report={current_report} />
        </ViewReportContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    current_report: selectCurrentReport
})

export default connect(mapStateToProps, { getAProjectReport })(ViewReport);