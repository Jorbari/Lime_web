import React from 'react';
import CloseDivButton from '../../close-div-icon-button/close-div-icon-button.component';
import * as Style from './report-builder-scope.styles'
import { manageScopeTab } from '../../../redux/report/report.actions';
import { connect } from 'react-redux';
const ReportBuilderScope = ({ manageScopeTab, inScope, outScope }) => {
    return (
        <Style.ReportBuilderScopeContainer>
            <Style.Title>
                Scopes
                <CloseDivButton onClick={() => manageScopeTab()} />
            </Style.Title>
            <Style.Body>
                <Style.ScopeBar>
                    <h3>inScope</h3>
                    <p>{inScope}</p>
                </Style.ScopeBar>
                <Style.ScopeBar>
                    <h3>outScope</h3>
                    <p>{outScope}</p>
                </Style.ScopeBar>
            </Style.Body>
        </Style.ReportBuilderScopeContainer>
    )
}

export default connect(null, { manageScopeTab })(ReportBuilderScope)