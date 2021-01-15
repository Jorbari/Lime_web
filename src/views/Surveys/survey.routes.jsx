import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ProtectedRoute from "../../HOCs/ProtectedRoute";
import surveyList from "./survey-list/survey-list.component";
import surveyDetails from "./survey-details/survey-details.component";
import surveyNew from './survey-new/survey-new.component';
import CreateSurvey from './survey-create/survey-create.component';
import EditSurvey from './survey-edit/survey-edit.component';
import { setHeading } from '../../redux/layout/layout.action'
import {connect} from 'react-redux'

const SurveyRoutes = ({setHeading, match}) => {
  setHeading("Surveys")
    console.log(match.path)
  return (
    <React.Fragment>
        <Switch>
          <ProtectedRoute exact path={`${match.url}/`} component={surveyList} />
          <ProtectedRoute exact path={`${match.url}/details/:id`} component={surveyDetails} />
          <ProtectedRoute exact path={`${match.url}/new`} component={surveyNew} />
          <ProtectedRoute exact path={`${match.url}/create/:id`} component={CreateSurvey} />
          <ProtectedRoute exact path={`${match.url}/edit/:id`} component={EditSurvey} />
        </Switch>
    </React.Fragment>
  );
};

export default connect(null,{setHeading})(SurveyRoutes)