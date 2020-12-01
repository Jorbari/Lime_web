import React from "react";
import { Router, Switch } from "react-router-dom";
import GuestRoute from "./HOCs/GuestRoute";
import AuthWrapper from "./views/AuthWrapper/AuthWrapper";
import ProtectedRoute from "./HOCs/ProtectedRoute";
import Dashboard from "./views/Dashboard/Dashboard";
import Projects from "./views/Projects/Projects";
import Project from "./views/Projects/Project";
import Report from "./views/Report/Report";
import Profile from "./views/Profile/Profile";
import SideBar from "./components/side-bar/SideBar";
import NavBar from "./components/NavBar";
import NewProject from "./components/new-project/NewProject";
import ViewReport from "./views/view-report/view-report.component";
import { MainContentContainer, MainContainer, MainContent } from "./App.styles";
import SurveyRoutes from "./views/Surveys/survey.routes";
// import { getToken } from "./api/helpers";

const App = () => {
  return (
    <Switch>
      <GuestRoute exact path="/signup" component={AuthWrapper} />
      <GuestRoute exact path="/login" component={AuthWrapper} />
      <GuestRoute exact path="/" component={AuthWrapper} />
      <MainContainer>
        <SideBar />
        <MainContentContainer>
          <NavBar title="Dashboard" />
          <MainContent>
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute exact path="/projects" component={Projects} />
            <ProtectedRoute exact path="/new-project" component={NewProject} />
            <ProtectedRoute exact path="/projects/:id" component={Project} />
            <ProtectedRoute path="/surveys" component={SurveyRoutes} />
            {/* <ProtectedRoute exact path="/new-survey" component={NewSurvey}/> */}
            {/* <ProtectedRoute exact path="/surveys/:id" component={Surveys}/> */}
            <ProtectedRoute exact path="/report" component={Report} />
            <ProtectedRoute
              exact
              path="/report/:reportId"
              component={ViewReport}
            />
            <ProtectedRoute exact path="/profile" component={Profile} />
          </MainContent>
        </MainContentContainer>
      </MainContainer>
      );
    </Switch>
  );
};

export default App;
