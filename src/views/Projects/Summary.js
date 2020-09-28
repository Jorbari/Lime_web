import React from "react";
import styled from "styled-components";

import infoIcon from "../../assets/info.svg";

const SummaryContainer = styled.div`
  .sapsTable {
    width: 1000px;
    border: 0.5px solid #7fcd91;
    border-left: none;
    border-right: none;
  }

  .borderLine {
    height: 85.19px;
    border-right: 1px solid #7fcd91;
  }

  .borderLineLeft {
    height: 85.19px;
    border-left: 1px solid #7fcd91;
  }

  .deleteProjectText {
    position: relative;
    right: -58.8rem;
    top: -21px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: underline;
    /* margin-right: -200px; */
    color: #dc4343;
    transform: matrix(1, 0.01, -0.01, 1, 0, 0);
  }

  .react-tabs__tab-list {
    margin-left: 2rem !important;
  }

  .card-header-text {
    position: absolute;
    width: 116px;
    height: 36px;
    left: 30px;
    top: 526px;

    /* font-family: Poppins;
font-style: normal; */
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    color: #5b5656;
  }

  .table-card-container {
    border: 1px solid #7fcd91;
    width: 1000px;
    height: 447px;
    border-radius: 4px;
    margin-top: 4.5rem;
    /* margin-left: 1rem; */
  }

  .details-card-table {
    width: 1191px;
    /* border: 0.5px solid #7fcd91; */
    border-left: none;
    border-right: none;
  }

  .details-card-table h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #5b5656;
  }

  /* .tab-list {
    padding-left: 2rem;
    padding-right: 2rem
  } */

  .project-status {
    position: absolute;
    width: 285px;
    height: 164px;
    /* left: 9px; */
    right: 78px;
    top: 334px;
    border-radius: 10px;
    background: rgba(182, 230, 189, 0.3);
  }

  .sapsHeader-conatiner {
    position: relative;
    top: 7rem;
    left: -2rem;
  }
`;

const SummaryTab = (props) => {
  return (
    <SummaryContainer>
      <div className="sapsHeader-conatiner">
        <h1 className="sapsHeader font-semibold ml-8 py-4">SAPS Project</h1>
        <span className="deleteProjectText">Delete project</span>
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
                  <p>3</p>
                </div>
              </td>
              <td className="py-10 w-2/4 text-center">
                <div>
                  <h4>Active Surveys:</h4>
                  <p>2</p>
                </div>
              </td>
              <td className="py-10 w-2/4 text-center">
                <div className="borderLineLeft pt-6">
                  <h4>Drafted Surveys:</h4>
                  <p>1</p>
                </div>
              </td>
            </tr>
          </thead>
        </table>
      </div>

      <div className="p-4 flex-auto project-status">
        <img
          alt=""
          src={infoIcon}
          style={{ position: "relative", left: "10rem" }}
        />
        <div className="relative">
          <h1 className="mb-1 font-semibold text-xl">Project Status:</h1>
          <p>Ongoing</p>
        </div>
      </div>

      <h1 className="card-header-text">Details</h1>
      <div className="table-card-container w-full xl:w-9/12 mb-12 xl:mb-0 pr-4">
        <div className="py-10" style={{ paddingLeft: "1rem" }}>
          <p>Decription:</p>
          <h5>
            The project is to ascetain the custlomer satisfaction level of the
            clients of SAPS
          </h5>
        </div>
        <table className="details-card-table table-fixed ml-4">
          <thead>
            <tr>
              <td className="w-2/4">
                <div className="">
                  <p>Date Started:</p>
                  <h4>10th of January 2020</h4>
                </div>
              </td>
              <td className="py-6 w-2/4">
                <div>
                  <p>Deadline:</p>
                  <h4>Unknown</h4>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-2/4">
                <div className="">
                  <p>Project Manager:</p>
                  <h4>Yasmin Olabanjo</h4>
                </div>
              </td>
              <td className="py-6 w-2/4">
                <div>
                  <p>Phone Number:</p>
                  <h4>08045578995</h4>
                </div>
              </td>
              <td className="py-6 w-2/4">
                <div>
                  <p>E-mail:</p>
                  <h4>Yasminolabanjo@gmail.com </h4>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-2/4">
                <div className="">
                  <p>Executive sponsor:</p>
                  <h4>Pearl Bawa</h4>
                </div>
              </td>
              <td className="py-6 w-2/4">
                <div>
                  <p>Phone Number:</p>
                  <h4>08054478965 </h4>
                </div>
              </td>
              <td className="py-6 w-2/4">
                <div>
                  <p>E-mail:</p>
                  <h4>earlbawa@gmail.com</h4>
                </div>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </SummaryContainer>
  );
};

export default SummaryTab;
