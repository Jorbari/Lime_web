import React from "react";
import styled from "styled-components";

const SurveyContainer = styled.div`
  margin-top: 9rem;
  /* margin-left: -2rem; */
  border: 1px solid #7fcd91;
  border-radius: 10px;

  .survey-table {
    /* width: 900px; */
    border-left: none;
    border-right: none;
  }

  .table-border {
    border-bottom: 0.5px solid #7fcd91;
  }

  /* .survey-table  */
`;

const Survey = () => {
  return (
    <SurveyContainer
      className="mx-8"
      style={{ marginLeft: "2rem", marginRight: "2rem", height: "40vw" }}
    >
      <table
        className="survey-table table-fixed ml-4 w-full xl:w-10/12 mb-12 xl:mb-0 pr-4"
        style={{ width: "96%" }}
      >
        <thead>
          <tr className="table-border">
            <th className="w-2/4 py-6"></th>
            <th className="w-2/4 py-6">Name</th>
            <th className="w-2/4 py-6">Last Modified</th>
            <th className="w-2/4 py-6">Category</th>
            <th className="w-2/4 py-6">Responses</th>
            <th className="w-2/4 py-6">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-border">
            <td className="w-2/4 py-6">
              <input
                type="checkbox"
                class="appearance-none checked:bg-gray-900 checked:border-transparent ..."
              />
            </td>
            <td className="w-2/4 py-6">Market Research Product Testing</td>
            <td className="w-2/4 py-6">10/01/2020</td>
            <td className="w-2/4 py-6">Baseline</td>
            <td className="w-2/4 py-6">54</td>
            <td className="w-2/4 py-6">Active</td>
          </tr>
          <tr className="table-border">
            <td className="w-2/4 py-6">
              <input
                type="checkbox"
                class="appearance-none checked:bg-gray-900 checked:border-transparent ..."
              />
            </td>
            <td className="w-2/4 py-6">Market Research Product Testing</td>
            <td className="w-2/4 py-6">10/01/2020</td>
            <td className="w-2/4 py-6">Baseline</td>
            <td className="w-2/4 py-6">54</td>
            <td className="w-2/4 py-6">Active</td>
          </tr>
          <tr className="table-border">
            <td className="w-2/4 py-6">
              <input
                type="checkbox"
                class="appearance-none checked:bg-gray-900 checked:border-transparent ..."
              />
            </td>
            <td className="w-2/4 py-6">Market Research Product Testing</td>
            <td className="w-2/4 py-6">10/01/2020</td>
            <td className="w-2/4 py-6">Baseline</td>
            <td className="w-2/4 py-6">54</td>
            <td className="w-2/4 py-6">Active</td>
          </tr>
        </tbody>
      </table>
    </SurveyContainer>
  );
};

export default Survey;
