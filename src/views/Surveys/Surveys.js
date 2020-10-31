import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

import SideBar from "../../components/SideBar";

const SurveysContainer = styled.div`
  margin-top: 1rem;
  border: 1px solid #7fcd91;
  border-radius: 10px;

  .survey-table {
    border-left: none;
    border-right: none;
  }

  .table-border {
    border-bottom: 0.5px solid #7fcd91;
  }
`;

const ButtonContainer = styled.div`
  .newProjectButton {
    padding: 11px 18px;
    width: 203.11px;
    height: 49px;
    background: #b6e6bd;
    border-radius: 10px;
  }

  .sortBy {
    border: 1px solid #7fcd91;
    box-sizing: border-box;
    border-radius: 10px;
    width: 176px;
    height: 49px;
  }
`;

function Surveys(props) {
  const { history } = props;
  const [newProjectView, setNewProjectView] = React.useState(false);

  const toggleNewProjectView = () => {
    setNewProjectView(!newProjectView);
  };
  return (
    <>
      <SideBar toggleNewProjectView={toggleNewProjectView} history={history} />
      <ButtonContainer className="relative bg-white pt-32 mr-6">
        <div className="px-2 md:px-10 mx-auto w-full">
          <div className="flex justify-end">
            <button className="newProjectButton">
              <i className="fa fa-plus mr-2" aria-hidden="true"></i>
              New Project
            </button>
            <button className="sortBy ml-8">Show: All</button>
          </div>
        </div>
      </ButtonContainer>

      <SurveysContainer
        className="mx-8 relative md:ml-64 bg-white card flex flex-col md:flew-wrap"
        style={{ marginLeft: "18rem", marginRight: "2rem", height: "40vw" }}
      >
        <div className="flex flex-row">
          <table
            className="survey-table table-fixed ml-4 w-full xl:w-10/12 mb-12 xl:mb-0 pr-4"
            style={{ width: "96%" }}
          >
            <thead>
              <tr className="table-border">
                <th className="w-2/4 py-6"></th>
                <th className="w-2/4 py-6">Name</th>
                <th className="w-2/4 py-6">Last Modified</th>
                <th className="w-2/4 py-6">Project</th>
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
                    className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                  />
                </td>
                <td className="w-2/4 py-6">Market Research Product Testing</td>
                <td className="w-2/4 py-6">10/01/2020</td>
                <td className="w-2/4 py-6">SAPS Project</td>
                <td className="w-2/4 py-6">Baseline</td>
                <td className="w-2/4 py-6">54</td>
                <td className="w-2/4 py-6">Active</td>
              </tr>
              <tr className="table-border">
                <td className="w-2/4 py-6">
                  <input
                    type="checkbox"
                    className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                  />
                </td>
                <td className="w-2/4 py-6">Market Research Product Testing</td>
                <td className="w-2/4 py-6">10/01/2020</td>
                <td className="w-2/4 py-6">SAPS Project</td>
                <td className="w-2/4 py-6">Baseline</td>
                <td className="w-2/4 py-6">54</td>
                <td className="w-2/4 py-6">Active</td>
              </tr>
              <tr className="table-border">
                <td className="w-2/4 py-6">
                  <input
                    type="checkbox"
                    className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                  />
                </td>
                <td className="w-2/4 py-6">Market Research Product Testing</td>
                <td className="w-2/4 py-6">10/01/2020</td>
                <td className="w-2/4 py-6">SAPS Project</td>
                <td className="w-2/4 py-6">Baseline</td>
                <td className="w-2/4 py-6">54</td>
                <td className="w-2/4 py-6">Active</td>
              </tr>
              <tr className="table-border">
                <td className="w-2/4 py-6">
                  <input
                    type="checkbox"
                    className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                  />
                </td>
                <td className="w-2/4 py-6">Market Research Product Testing</td>
                <td className="w-2/4 py-6">10/01/2020</td>
                <td className="w-2/4 py-6">SAPS Project</td>
                <td className="w-2/4 py-6">Baseline</td>
                <td className="w-2/4 py-6">54</td>
                <td className="w-2/4 py-6">Active</td>
              </tr>
              <tr className="table-border">
                <td className="w-2/4 py-6">
                  <input
                    type="checkbox"
                    className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                  />
                </td>
                <td className="w-2/4 py-6">Market Research Product Testing</td>
                <td className="w-2/4 py-6">10/01/2020</td>
                <td className="w-2/4 py-6">SAPS Project</td>
                <td className="w-2/4 py-6">Baseline</td>
                <td className="w-2/4 py-6">54</td>
                <td className="w-2/4 py-6">Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SurveysContainer>
    </>
  );
}

export default Surveys;
