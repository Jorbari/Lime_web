import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Container } from "react-bootstrap";
import { connect } from "react-redux";

import "./App.css";

import SignUp from "./views/Signup/SignUp";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import Projects from "./views/Projects/Projects";
import Project from "./views/Projects/Project";
import Surveys from "./views/Surveys/Surveys";
import Report from "./views/Report/Report";
import Profile from "./views/Profile/Profile";

import { simpleAction } from "./actions/simpleAction";

function App(props) {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={Project} />
          <Route exact path="/surveys" component={Surveys} />
          <Route exact path="/report" component={Report} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
