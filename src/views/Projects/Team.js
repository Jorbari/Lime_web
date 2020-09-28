import React from "react";
import styled from "styled-components";

import profileImage from "../../assets/profileImage.png";

const TeamContainer = styled.div`
  margin-top: 9rem;
  /* margin-left: -2rem; */
  border: 1px solid #7fcd91;
  border-radius: 10px;

  .team-table {
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

const Team = () => {
  return (
    <TeamContainer
      className="mx-8"
      style={{ marginLeft: "2rem", marginRight: "2rem", height: "40vw" }}
    >
      <table
        className="team-table table-fixed ml-4 w-full xl:w-10/12 mb-12 xl:mb-0 pr-4"
        style={{ width: "96%" }}
      >
        <thead>
          <tr className="table-border">
            <th className="w-2/4 py-6"></th>
            <th className="w-2/4 py-6">Name</th>
            <th className="w-2/4 py-6">E-mail</th>
            <th className="w-2/4 py-6">Number</th>
            <th className="w-2/4 py-6"></th>
            <th className="w-2/4 py-6"></th>
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
            <td className="w-2/4 py-6">
              <div>
                <img src={profileImage} alt="" className="rounded-full" />
                <p className="profile-cell-text">Ralph Phillips</p>
              </div>
            </td>
            <td className="w-2/4 py-6">ralph.phillips@example.com</td>
            <td className="w-2/4 py-6">(406) 555-0120</td>
            <td className="w-2/4 py-6 edit-text">Edit</td>
            <td className="w-2/4 py-6 delete-text">Delete</td>
          </tr>
          <tr className="table-border">
            <td className="w-2/4 py-6">
              <input
                type="checkbox"
                class="appearance-none checked:bg-gray-900 checked:border-transparent ..."
              />
            </td>
            <td className="w-2/4 py-6">
              <div>
                <img src={profileImage} alt="" className="rounded-full" />
                <p className="profile-cell-text">Ralph Phillips</p>
              </div>
            </td>
            <td className="w-2/4 py-6">ralph.phillips@example.com</td>
            <td className="w-2/4 py-6">(406) 555-0120</td>
            <td className="w-2/4 py-6 edit-text">Edit</td>
            <td className="w-2/4 py-6 delete-text">Delete</td>
          </tr>
          <tr className="table-border">
            <td className="w-2/4 py-6">
              <input
                type="checkbox"
                class="appearance-none checked:bg-gray-900 checked:border-transparent ..."
              />
            </td>
            <td className="w-2/4 py-6">
              <div>
                <img src={profileImage} alt="" className="rounded-full" />
                <p className="profile-cell-text">Ralph Phillips</p>
              </div>
            </td>
            <td className="w-2/4 py-6">ralph.phillips@example.com</td>
            <td className="w-2/4 py-6">(406) 555-0120</td>
            <td className="w-2/4 py-6 edit-text">Edit</td>
            <td className="w-2/4 py-6 delete-text">Delete</td>
          </tr>
          <tr className="table-border">
            <td className="w-2/4 py-6">
              <input
                type="checkbox"
                class="appearance-none checked:bg-gray-900 checked:border-transparent ..."
              />
            </td>
            <td className="w-2/4 py-6">
              <div>
                <img src={profileImage} alt="" className="rounded-full" />
                <p className="profile-cell-text">Ralph Phillips</p>
              </div>
            </td>
            <td className="w-2/4 py-6">ralph.phillips@example.com</td>
            <td className="w-2/4 py-6">(406) 555-0120</td>
            <td className="w-2/4 py-6 edit-text">Edit</td>
            <td className="w-2/4 py-6 delete-text">Delete</td>
          </tr>
          <tr className="table-border">
            <td className="w-2/4 py-6">
              <input
                type="checkbox"
                class="appearance-none checked:bg-gray-900 checked:border-transparent ..."
              />
            </td>
            <td className="w-2/4 py-6">
              <div>
                <img src={profileImage} alt="" className="rounded-full" />
                <p className="profile-cell-text">Ralph Phillips</p>
              </div>
            </td>
            <td className="w-2/4 py-6">ralph.phillips@example.com</td>
            <td className="w-2/4 py-6">(406) 555-0120</td>
            <td className="w-2/4 py-6 edit-text">Edit</td>
            <td className="w-2/4 py-6 delete-text">Delete</td>
          </tr>
        </tbody>
      </table>
    </TeamContainer>
  );
};

export default Team;
