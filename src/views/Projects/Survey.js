import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import { getListOfProjectSurvey } from "../../api/project";

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

const Survey = (props) => {
  const [surveyList, setSurveyList] = useState([]);

  useEffect(() => {
    const val = async () => {
      const data = await getListOfProjectSurvey(props.project._id);

      if (data.data.data) {
        setSurveyList(data.data.data);
      }
    };

    val();
  }, []);

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
          {surveyList.length > 0 &&
            surveyList.map((survey, index) => (
              <tr className="table-border" key={index}>
                <td className="w-2/4 py-6">
                  <input
                    type="checkbox"
                    className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                  />
                </td>
                <td className="w-2/4 py-6">{survey?.name}</td>
                <td className="w-2/4 py-6">
                  {moment(survey?.lastModified).format("Do of MMMM, YYYY")}
                </td>
                <td className="w-2/4 py-6"> {survey?.category} </td>
                <td className="w-2/4 py-6"> {survey?.responses} </td>
                <td className="w-2/4 py-6"> {survey?.status} </td>
              </tr>
            ))}
        </tbody>
      </table>
    </SurveyContainer>
  );
};

export default Survey;
