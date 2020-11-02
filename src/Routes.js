import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";

import AuthWrapper from "./views/AuthWrapper/AuthWrapper";
import Dashboard from "./views/Dashboard/Dashboard";
import Projects from "./views/Projects/Projects";
import Project from "./views/Projects/Project";
import SingleSurvey from "./views/Surveys/SingleSurvey";
import Surveys from "./views/Surveys/Surveys";
import Report from "./views/Report/Report";
import Profile from "./views/Profile/Profile";

import ProtectedRoute from "./HOCs/ProtectedRoute";
import GuestRoute from "./HOCs/GuestRoute";

const Routes = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <GuestRoute exact path="/signup" component={AuthWrapper} />
          <GuestRoute exact path="/login" component={AuthWrapper} />
          <GuestRoute exact path="/" component={AuthWrapper} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/projects" component={Projects} />
          <ProtectedRoute exact path="/projects/:id" component={Project} />
          <ProtectedRoute exact path="/surveys" component={Surveys} />
          <ProtectedRoute exact path="/surveys/:id" component={Surveys} />
          <ProtectedRoute exact path="/report" component={Report} />
          <ProtectedRoute exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Routes;
