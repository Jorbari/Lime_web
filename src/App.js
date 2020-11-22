import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import GuestRoute from "./HOCs/GuestRoute";
import AuthWrapper from "./views/AuthWrapper/AuthWrapper";
import ProtectedRoute from "./HOCs/ProtectedRoute";
import Dashboard from "./views/Dashboard/Dashboard";
import Projects from "./views/Projects/Projects";
import Project from "./views/Projects/Project";
import Surveys from "./views/Surveys/Surveys";
import Report from "./views/Report/Report";
import Profile from "./views/Profile/Profile";
import SideBar from './components/side-bar/SideBar'
import NavBar from './components/NavBar'
import NewProject from "./components/new-project/NewProject";
import NewSurvey from "./components/new-survey/NewSurvey";
import ViewReport from './views/view-report/view-report.component'
import {
    MainContentContainer, 
    MainContainer, 
    MainContent
}from './App.styles';
const App = () => {
    return (
        <Router>
        <MainContainer>
            <SideBar />
            <MainContentContainer>
                <NavBar title="Dashboard" />
                    <MainContent>
                        <Switch>
                            <GuestRoute exact path="/signup" component={AuthWrapper}/>
                            <GuestRoute exact path="/login" component={AuthWrapper}/>
                            <GuestRoute exact path="/" component={AuthWrapper}/>
                            <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
                            <ProtectedRoute exact path="/projects" component={Projects}/>
                            <ProtectedRoute exact path="/new-project" component={NewProject}/>
                            <ProtectedRoute exact path="/projects/:id" component={Project}/>
                            <ProtectedRoute exact path="/surveys" component={Surveys}/>
                            <ProtectedRoute exact path="/new-survey" component={NewSurvey}/>
                            <ProtectedRoute exact path="/surveys/:id" component={Surveys}/>
                            <ProtectedRoute exact path="/report" component={Report}/>
                            <ProtectedRoute exact path="/report/view" component={ViewReport}/>
                            <ProtectedRoute exact path="/profile" component={Profile}/>
                        </Switch>
                    </MainContent>
            </MainContentContainer>
        </MainContainer>
        </Router>
    );
};

export default App;
