import React from "react";
import styled from "styled-components";

// import profileImage from "../../assets/profileImage.png";

const BudgetContainer = styled.div`
  margin-top: 9rem;
  /* margin-left: -2rem; */
  border: 1px solid #7fcd91;
  border-radius: 10px;

  .budget-table {
    /* width: 900px; */
    border-left: none;
    border-right: none;
  }

  .table-border {
    border-bottom: 0.5px solid #7fcd91;
  }

  .profile-cell-text {
    margin-top: -2.2rem;
    margin-left: 3.8rem;
  }

  .edit-text {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: underline;
    color: #4b5fa7;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }

  .delete-text {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: underline;
    color: #dc4343;
    transform: matrix(1, 0.01, -0.01, 1, 0, 0);
  }
`;

const Budget = () => {
  return (
    <BudgetContainer
      className="mx-8"
      style={{ marginLeft: "2rem", marginRight: "2rem", height: "40vw" }}
    >
      <table
        className="budget-table table-fixed ml-4 w-full xl:w-10/12 mb-12 xl:mb-0 pr-4"
        style={{ width: "96%" }}
      >
        <thead>
          <tr className="table-border">
            <th className="w-2/4 py-6">No</th>
            <th className="w-2/4 py-6">Item</th>
            <th className="w-2/4 py-6">Unit</th>
            <th className="w-2/4 py-6">Cost</th>
            <th className="w-2/4 py-6">Amount</th>
            <th className="w-2/4 py-6"></th>
            <th className="w-2/4 py-6"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-border">
            <td className="w-2/4 py-6">1</td>
            <td className="w-2/4 py-6">Transportation</td>
            <td className="w-2/4 py-6">4</td>
            <td className="w-2/4 py-6">N2000</td>
            <td className="w-2/4 py-6">N8,000</td>
            <td className="w-2/4 py-6 edit-text">Edit</td>
            <td className="w-2/4 py-6 delete-text">Delete</td>
          </tr>
          <tr className="table-border">
            <td className="w-2/4 py-6">2</td>
            <td className="w-2/4 py-6">Transportation</td>
            <td className="w-2/4 py-6">4</td>
            <td className="w-2/4 py-6">N2000</td>
            <td className="w-2/4 py-6">N8,000</td>
            <td className="w-2/4 py-6 edit-text">Edit</td>
            <td className="w-2/4 py-6 delete-text">Delete</td>
          </tr>
          <tr className="table-border">
            <td className="w-2/4 py-6">2</td>
            <td className="w-2/4 py-6">Transportation</td>
            <td className="w-2/4 py-6">4</td>
            <td className="w-2/4 py-6">N2000</td>
            <td className="w-2/4 py-6">N8,000</td>
            <td className="w-2/4 py-6 edit-text">Edit</td>
            <td className="w-2/4 py-6 delete-text">Delete</td>
          </tr>
          <tr className="table-border">
            <td className="w-2/4 py-6">3</td>
            <td className="w-2/4 py-6">Transportation</td>
            <td className="w-2/4 py-6">4</td>
            <td className="w-2/4 py-6">N2000</td>
            <td className="w-2/4 py-6">N8,000</td>
            <td className="w-2/4 py-6 edit-text">Edit</td>
            <td className="w-2/4 py-6 delete-text">Delete</td>
          </tr>
          <tr className="table-border">
            <td className="w-2/4 py-6">4</td>
            <td className="w-2/4 py-6">Transportation</td>
            <td className="w-2/4 py-6">4</td>
            <td className="w-2/4 py-6">N2000</td>
            <td className="w-2/4 py-6">N8,000</td>
            <td className="w-2/4 py-6 edit-text">Edit</td>
            <td className="w-2/4 py-6 delete-text">Delete</td>
          </tr>
        </tbody>
      </table>
    </BudgetContainer>
  );
};

export default Budget;
