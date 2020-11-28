import React from 'react';
import { connect } from 'react-redux';
import { manageTeamMembersTab } from '../../../redux/report/report.actions';
import CloseDivButton from '../../close-div-icon-button/close-div-icon-button.component';
import * as Style from './report-builder-team.styles'
const ReportBuilderTeam = ({ manageTeamMembersTab, projectManager, executiveSponsor }) => {
    return (
        <Style.ReportTeamContainer>
            <Style.Title >
                Team Members
                <CloseDivButton onClick={() => manageTeamMembersTab()} />
            </Style.Title>
            <Style.TeamMemberBody>
                <h3>Project Manager</h3>
                <p>{projectManager}</p>

                <h3>Executive Sponsor</h3>
                <p>{executiveSponsor}</p>
            </Style.TeamMemberBody>
        </Style.ReportTeamContainer>
    )
}
export default connect(null, { manageTeamMembersTab })(ReportBuilderTeam)