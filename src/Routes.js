import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Container } from "react-bootstrap";
import { connect } from "react-redux";

import "./App.css";

import AuthWrapper from "./views/AuthWrapper/AuthWrapper";
import Dashboard from "./views/Dashboard/Dashboard";
import Projects from "./views/Projects/Projects";
import SapsProject from "./views/Projects/SapsProject";
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
          <ProtectedRoute exact path="/projects/saps" component={SapsProject} />
          <ProtectedRoute exact path="/surveys" component={Surveys} />
          <ProtectedRoute exact path="/report" component={Report} />
          <ProtectedRoute exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Routes;
