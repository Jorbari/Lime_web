import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getAllProjects } from "../../redux/project/project.actions";
import {
    CardContainer,
    ReportProjectContainer
} from './report.styles'
import folder from "../../assets/bigFolder.png";




function Report(props) {
    const { history, projects } = props;
    const [newProjectView, setNewProjectView] = React.useState(false);

    React.useEffect(() => {
        const fetchProjects = async () => {
            await props.getAllProjects();
        };

        fetchProjects();
    }, []);

    const toggleNewProjectView = () => {
        setNewProjectView(!newProjectView);
    };
    return (
        <>
            <div className="relative bg-white">
                <ReportProjectContainer className="relative bg-white md:pt-32 pb-32 pt-12">
                    <Tabs>
                        <TabList>
                            <Tab style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                                Built Reports
                            </Tab>
                            <Tab style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                                Un-Built Reports
                            </Tab>
                        </TabList>

                        <TabPanel className="w-full xl:w-8/12 mb-12 xl:mb-0 pr-4">
                            <CardContainer className="relative bg-white card flex flex-col md:flew-wrap">
                                <div className="flex flex-row pt-8">
                                    <div className="flex flex-wrap">
                                        {projects.length > 0 &&
                                            projects.map((project, idx) => (
                                                <Link to={`/report/view`} key={idx}>
                                                    <div className="relative bg-white">
                                                        <div className="w-full xl:w-4/12 pl-1 pr-1 ml-4 card">
                                                            <div
                                                                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded h-32">
                                                                <div
                                                                    className="rounded-t mb-0 px-4 bg-transparent card-image-and-text-container">
                                                                    <div className="flex flex-wrap items-center">
                                                                        <div
                                                                            className="relative w-full max-w-full flex-grow flex-1">
                                                                            <img
                                                                                src={folder}
                                                                                alt=""
                                                                                width="57.39px"
                                                                                height="50px"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <p className="card-text mt-4">
                                                                    {project.title}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            </CardContainer>
                        </TabPanel>
                        <TabPanel>
                            <CardContainer className="relative bg-white card flex flex-col md:flew-wrap">
                                <div className="flex flex-row pt-8">
                                    <div className="flex flex-wrap">
                                        {projects.length > 0 &&
                                            projects.map((project, idx) => (
                                                <Link to={`/report/view`} key={idx}>
                                                    <div className="relative bg-white">
                                                        <div className="w-full xl:w-4/12 pl-1 pr-1 ml-4 card">
                                                            <div
                                                                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded h-32">
                                                                <div
                                                                    className="rounded-t mb-0 px-4 bg-transparent card-image-and-text-container">
                                                                    <div className="flex flex-wrap items-center">
                                                                        <div
                                                                            className="relative w-full max-w-full flex-grow flex-1">
                                                                            <img
                                                                                src={folder}
                                                                                alt=""
                                                                                width="57.39px"
                                                                                height="50px"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <p className="card-text mt-4">
                                                                    {project.title}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            </CardContainer>
                        </TabPanel>
                    </Tabs>
                </ReportProjectContainer>
            </div>
        </>
    );
}

const mapStateToProps = ({ project: { isLoading, status, projects } }) => ({
    isLoading,
    status,
    projects
});

export default connect(mapStateToProps, { getAllProjects })(Report);
