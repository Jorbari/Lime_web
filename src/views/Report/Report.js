import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { showAllProject } from "../../redux/report/report.actions";
import { CardContainer, ReportProjectContainer } from "./report.styles";
import folder from "../../assets/bigFolder.png";
import { createStructuredSelector } from "reselect";
import { selectAllReport } from "../../redux/report/report.selectors";

function Report(props) {
  const { showAllProject, allReport } = props;

  React.useEffect(() => {
    showAllProject();
  }, []);

  const renderAllProject = () => (
    <CardContainer className="relative bg-white card flex flex-col md:flew-wrap">
      <div className="flex flex-row pt-8">
        <div className="flex flex-wrap">
          {allReport.length
            ? allReport.map((report, idx) => (
                <Link to={`/report/${report._id}`} key={idx}>
                  <div className="relative bg-white">
                    <div className="w-full xl:w-4/12 pl-1 pr-1 ml-4 card">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded h-32">
                        <section>
                          <img src={folder} alt="" />
                        </section>
                        <p className="card-text capitalize">{report.title}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            : null}
        </div>
      </div>
    </CardContainer>
  );
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
            <TabPanel className="w-full mb-12 xl:mb-0 pr-4">
              {renderAllProject()}
            </TabPanel>
            <TabPanel>{renderAllProject()}</TabPanel>
          </Tabs>
        </ReportProjectContainer>
      </div>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  allReport: selectAllReport,
});

export default connect(mapStateToProps, { showAllProject })(Report);
