import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {getSingleSurvey} from "../../../redux/survey/survey.action";
import Summary from "../../Projects/Summary";
import Survey from "../../Projects/Survey";
import Team from "../../Projects/Team";
import ExecutionPlan from "../../Projects/ExecutionPlan";
import Budget from "../../Projects/Budget";
import {
    SapsProjectContainer
} from './survey.details.styles'
const SurveyDetails = props => {
    const {
        history,
        survey,
        surveys,
        match: {
            params: {id}
        }
    } = props;
    const [newProjectView, setNewProjectView] = React.useState(false);

    React.useEffect(() => {
        const fetchSingleSurvey = async () => {
            await props.getSingleSurvey(id);
        };

        fetchSingleSurvey();
    }, []);

    const toggleNewProjectView = () => {
        setNewProjectView(!newProjectView);
    };

    return (
        <>
            <div className="relative bg-white">
                {/* <div> */}
                <SapsProjectContainer className="relative bg-white md:pt-32 pb-32 pt-12">
                    <Tabs>
                        <TabList>
                            <Tab style={{paddingLeft: "2rem", paddingRight: "2rem"}}>
                                Summary
                            </Tab>
                            <Tab style={{paddingLeft: "2rem", paddingRight: "2rem"}}>
                                Survey
                            </Tab>
                            <Tab style={{paddingLeft: "2rem", paddingRight: "2rem"}}>
                                Team
                            </Tab>
                            <Tab style={{paddingLeft: "2rem", paddingRight: "2rem"}}>
                                Execution plan
                            </Tab>
                            <Tab style={{paddingLeft: "2rem", paddingRight: "2rem"}}>
                                Budget
                            </Tab>
                        </TabList>

                        <div className="px-4 md:px-10 mx-auto w-full -m-24">
                            <TabPanel className="w-full xl:w-8/12 mb-12 xl:mb-0 pr-4">
                                <Summary survey={survey} history={history} surveys={surveys}/>
                            </TabPanel>
                        </div>
                        <TabPanel>
                            <Survey/>
                        </TabPanel>
                        <TabPanel>
                            <Team/>
                        </TabPanel>
                        <TabPanel>
                            <ExecutionPlan/>
                        </TabPanel>
                        <TabPanel>
                            <Budget/>
                        </TabPanel>
                    </Tabs>
                </SapsProjectContainer>
                {/* </div> */}
            </div>
        </>
    );
};

const mapStateToProps = ({
                             survey: {isLoading, status, survey, surveys}, project:{project,projects}
                         }) => ({
    isLoading,
    status,
    survey,
    surveys,
    project,
    projects
});

export default connect(mapStateToProps, {getSingleSurvey})(SurveyDetails);