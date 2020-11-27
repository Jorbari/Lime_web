import React, { useState } from "react";
import moment from "moment";
import ConfirmationBox from "../../components/confirmation-box/confirmationBox";

import infoIcon from "../../assets/info.svg";
import { getSingleProject } from "../../redux/project/project.actions";
import { connect } from "react-redux";
import { selectSingleProject } from "../../redux/project/project.selectors";
import { SummaryContainer } from "./summary.styles";

const SummaryTab = (props) => {
  const { project, history, deleteProject, projects } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    const fetchProjectData = async () => {
      await props.getSingleProject();
    };

    fetchProjectData();
  }, []);

  const DeleteProject = () => {
    deleteProject(project._id, history, projects);
    handleClose();
  };

  const confirmation = () => {
    DeleteProject();
  };

  return (
    <SummaryContainer>
      <div className="sapsHeader-conatiner">
        <h1 className="sapsHeader capitalize font-semibold ml-8 py-4">
          {project?.title || "null"}
        </h1>
        {/* <button
          type="button"
          onClick={() => deleteProject(project._id, history, projects)}
        >
          <span className="deleteProjectText">Delete project</span>
        </button> */}
        <button
          type="button"
          className="deleteProjectText"
          onClick={() => handleShow()}
        >
          <span>Delete project</span>
        </button>
      </div>
      <div
        className="relative flex flex-col min-w-0 break-words w-full xl:w-10/12 mb-12 xl:mb-0 pr-4 mb-6 rounded"
        style={{
          marginLeft: "-1rem",
          marginTop: "8rem",
        }}
      >
        <table className="sapsTable table-fixed ml-4 w-full xl:w-10/12 mb-12 xl:mb-0 pr-4">
          <thead>
            <tr>
              <td className="w-2/4 text-center">
                <div className="borderLine pt-6">
                  <h4>Total No. of Surveys:</h4>
                  <p>0</p>
                </div>
              </td>
              <td className="py-10 w-2/4 text-center">
                <div>
                  <h4>Active Surveys:</h4>
                  <p>0</p>
                </div>
              </td>
              <td className="py-10 w-2/4 text-center">
                <div className="borderLineLeft pt-6">
                  <h4>Drafted Surveys:</h4>
                  <p>0</p>
                </div>
              </td>
            </tr>
          </thead>
        </table>
      </div>

      {/* <div className="p-4 flex-auto project-status">
        <img
          alt=""
          src={infoIcon}
          style={{ position: "relative", left: "10rem" }}
        />
        <div className="relative">
          <h1 className="mb-1 font-semibold text-xl">Project Status:</h1>
          <p>Ongoing</p>
        </div>
      </div> */}

      <h1 className="card-header-text">Details</h1>
      <div className="table-card-container w-full xl:w-9/12 mb-12 xl:mb-0 pr-4">
        <div className="py-10" style={{ paddingLeft: "1rem" }}>
          <p>Decription:</p>
          <h5>{project?.description}</h5>
        </div>
        <table className="details-card-table table-fixed ml-4">
          <thead>
            <tr>
              <td className="w-2/4">
                <div className="">
                  <p>Date Started:</p>
                  <h4>
                    {moment(project?.startDate).format("Do of MMMM YYYY")}
                  </h4>
                </div>
              </td>
              <td className="py-6 w-2/4">
                <div>
                  <p>Deadline:</p>
                  <h4>{moment(project?.endDate).format("Do of MMMM YYYY")}</h4>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-2/4">
                <div className="">
                  <p>Project Manager:</p>
                  <h4>{project?.manager}</h4>
                </div>
              </td>
              <td className="py-6 w-2/4">
                <div>
                  <p>E-mail:</p>
                  <h4>{project?.managerEmail}</h4>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-2/4">
                <div className="">
                  <p>Executive sponsor:</p>
                  <h4>{project?.sponsor}</h4>
                </div>
              </td>
              <td className="py-6 w-2/4">
                <div>
                  <p>E-mail:</p>
                  <h4>{project?.sponsorEmail}</h4>
                </div>
              </td>
            </tr>
          </thead>
        </table>
      </div>
      <ConfirmationBox
        title="Delete project"
        buttonMessage="Confirm Delete"
        handleClose={() => handleClose()}
        confirm={() => confirmation()}
        show={show}
      >
        Are you sure you want to delete this project?
      </ConfirmationBox>
    </SummaryContainer>
  );
};

const mapStateToProps = (state) => ({
  project: selectSingleProject(state),
});

export default connect(mapStateToProps, { getSingleProject })(SummaryTab);
