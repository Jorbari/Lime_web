import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Container } from "react-bootstrap";

import "./App.css";

import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import Projects from "./views/Projects/Projects";
import SapsProject from "./views/Projects/SapsProject";
import Surveys from "./views/Surveys/Surveys";
import Report from "./views/Report/Report";

function App() {
  return (
    <React.Fragment>
      {/* <Container> */}
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/saps" component={SapsProject} />
          <Route exact path="/surveys" component={Surveys} />
          <Route exact path="/report" component={Report} />
        </Switch>
      </Router>
      {/* </Container> */}
    </React.Fragment>
  );
}

export default App;
