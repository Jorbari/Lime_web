import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";
import ConfirmationBox from "../../components/confirmation-box/confirmationBox";

// import infoIcon from "../../assets/info.svg";
import { getSingleProject } from "../../redux/project/project.actions";
import { connect } from "react-redux";
import { selectSingleProject } from "../../redux/project/project.selectors";
import { SummaryContainer } from "./summary.styles";

const SummaryTab = (props) => {
  const { project, history, deleteProject, projects } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const DeleteProject = () => {
    deleteProject(project._id, history, projects);
    handleClose();
  };

  const confirmation = () => {
    DeleteProject();
  };

  const editProject = () => {
    history.push(`/edit-project/${project._id}`);
  };

  return (
    <SummaryContainer>
      <div className="sapsHeader-conatiner">
        <h1 className="sapsHeader capitalize font-semibold ml-8 py-4">
          {project?.title || "----"}
        </h1>
        <button type="button" className="delete__" onClick={() => handleShow()}>
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

      <div className="project__detail">
        <div className="project__detail--grid">
          <h4>Details</h4>
          <button onClick={() => editProject()}>Edit details</button>
        </div>

        <div className="project__detail--box">
          <div className="project__space">
            <section className="project__info">
              <p>Description:</p>
              <h4> {project?.description || "----"} </h4>
            </section>
          </div>

          <div className="project__info--grid project__space">
            <section className="project__info">
              <p>Date Started:</p>
              <h4>{moment(project?.startDate).format("Do of MMMM YYYY")}</h4>
            </section>

            <section className="project__info">
              <p>Deadline:</p>
              <h4>{moment(project?.endDate).format("Do of MMMM YYYY")}</h4>
            </section>
          </div>

          <div className="project__info--grid project__space">
            <section className="project__info">
              <p>Project Manager:</p>
              <h4> {project?.manager?.name || "----"} </h4>
            </section>

            <section className="project__info">
              <p>Phone Number:</p>
              <h4>{project?.manager?.phone_number || "----"}</h4>
            </section>

            <section className="project__info">
              <p>E-mail:</p>
              <h4>{project?.manager?.email || "----"}</h4>
            </section>
          </div>

          <div className="project__info--grid project__space">
            <section className="project__info">
              <p>Executive sponsor:</p>
              <h4>{project?.sponsor?.name || "----"}</h4> -b 
            </section>

            <section className="project__info">
              <p>Phone Number:</p>
              <h4>{project?.sponsor?.phone_number || "----"}</h4>
            </section>

            <section className="project__info">
              <p>E-mail:</p>
              <h4>{project?.sponsor?.email || "----"}</h4>
            </section>
          </div>
        </div>
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

export default withRouter(SummaryTab);
