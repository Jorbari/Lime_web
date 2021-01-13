import React from "react";
import styled from "styled-components";

import profileImage from "../../assets/profileImage.png";
import ExecPlanModal from "../../components/execution-plan-modal/execution-plan-modal.component";

const ExecutionPlanContainer = styled.div`
  margin-top: 9rem;
  /* margin-left: -2rem; */
  border: 1px solid #7fcd91;
  border-radius: 10px;

  .execution-plan-table {
    /* width: 900px; */
    border-left: none;
    border-right: none;
  }

  .table-border {
    border-bottom: 0.5px solid #7fcd91;
  }
  .table-border > td:last-child {
    display: flex;
    gap: 1rem;
  }

  /* .ExecutionPlan-table  */
`;

const ExecutionPlan = ({ showModal, onHide }) => {
  
  return (
    <ExecutionPlanContainer
      className="mx-8"
      style={{ marginLeft: "2rem", marginRight: "2rem", height: "40vw" }}
    >
      <table
        className="execution-plan-table table-fixed ml-4 w-full xl:w-10/12 mb-12 xl:mb-0 pr-4"
        style={{ width: "96%" }}
      >
        <thead>
          <tr className="table-border">
            <th className="w-2/4 py-6">No</th>
            <th className="w-2/4 py-6">Project Activities</th>
            <th className="w-2/4 py-6">Description of activities</th>
            <th className="w-2/4 py-6">Start date</th>
            <th className="w-2/4 py-6">Deadline</th>
            <th className="w-2/4 py-6">Assigned to:</th>
            <th className="w-2/4 py-6"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-border">
            <td className="w-2/4 py-6">1.</td>
            <td className="w-2/4 py-6">Baseline Benchmark</td>
            <td className="w-2/4 py-6">
              The creation of all baseline surveys for benchmarking.
            </td>
            <td className="w-2/4 py-6">10/01/2020</td>
            <td className="w-2/4 py-6">10/01/2020</td>
            <td className="w-2/4 py-6">
              <img src={profileImage} alt="" className="rounded-full" />
              <img src={profileImage} alt="" className="rounded-full" />
            </td>
          </tr>
          <tr className="table-border">
            <td className="w-2/4 py-6">2.</td>
            <td className="w-2/4 py-6">Baseline Benchmark</td>
            <td className="w-2/4 py-6">
              The creation of all baseline surveys for benchmarking.
            </td>
            <td className="w-2/4 py-6">10/01/2020</td>
            <td className="w-2/4 py-6">10/01/2020</td>
            <td className="w-2/4 py-6">
              <img src={profileImage} alt="" className="rounded-full" />
            </td>
          </tr>
          <tr className="table-border">
            <td className="w-2/4 py-6">3.</td>
            <td className="w-2/4 py-6">Baseline Benchmark</td>
            <td className="w-2/4 py-6">
              The creation of all baseline surveys for benchmarking.
            </td>
            <td className="w-2/4 py-6">10/01/2020</td>
            <td className="w-2/4 py-6">10/01/2020</td>
            <td className="w-2/4 py-6">
              <img src={profileImage} alt="" className="rounded-full" />
            </td>
          </tr>
        </tbody>
      </table>
      <ExecPlanModal showModal={showModal} onHide={onHide} />
    </ExecutionPlanContainer>
  );
};

export default ExecutionPlan;
