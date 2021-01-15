import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import { getAllUsers, addTeamMember } from "../../api/project";
import Notifier from "../../components/Notifier/notifier.component";
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

  .flex__ {
    display: flex;
    align-items: center;
    gap: 0 1rem;
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

const Team = (props) => {
  const [newEntry, setNewEntry] = useState({
    allUsers: [],
    selectedUser: "",
    teamMates: [],
  });

  const [open, setOpen] = useState(false);
  const [apiMessageFeedback, setApiMessageFeedback] = useState("");

  useEffect(() => {
    const val = async () => {
      const data = await getAllUsers();

      if (data.data.data) {
        setNewEntry({
          ...newEntry,
          allUsers: data.data.data,
        });
      }
    };

    val();
  }, []);

  const inviteTeamMate = async (event) => {
    event.preventDefault();

    const data = await addTeamMember(props.project._id, newEntry.selectedUser);
    if (data) {
      setNewEntry({
        ...newEntry,
        teamMates: data.data,
        selectedUser: "",
      });
      setApiMessageFeedback(
        `successfully added ${data.data.name} as a team-mate`
      );
      setOpen(true);
      props.onHide();
    }
    console.log(data);
  };

  const setNewEntryValues = (event) => {
    console.log(event.target.value);
    setNewEntry({
      ...newEntry,
      selectedUser: event.target.value,
    });
  };

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <>
      <Notifier
        open={open}
        handleClick={() => handleClick()}
        message={apiMessageFeedback}
      />

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
            {newEntry.teamMates.length > 0 &&
              newEntry.teamMates.map((team) => (
                <tr className="table-border">
                  <td className="w-2/4 py-6">
                    <input
                      type="checkbox"
                      className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                    />
                  </td>
                  <td className="w-2/4 py-6">
                    <div className="flex__">
                      <img src={profileImage} alt="" className="rounded-full" />
                      <p className="profile-cell-text">Ralph Phillips</p>
                    </div>
                  </td>
                  <td className="w-2/4 py-6">ralph.phillips@example.com</td>
                  <td className="w-2/4 py-6">(406) 555-0120</td>
                  <td className="w-2/4 py-6 edit-text">Edit</td>
                  <td className="w-2/4 py-6 delete-text">Delete</td>
                </tr>
              ))}

            {/* <tr className="table-border">
              <td className="w-2/4 py-6">
                <input
                  type="checkbox"
                  className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                />
              </td>
              <td className="w-2/4 py-6">
                <div className="flex__">
                  <img src={profileImage} alt="" className="rounded-full" />
                  <p className="profile-cell-text">Ralph Phillips</p>
                </div>
              </td>
              <td className="w-2/4 py-6">ralph.phillips@example.com</td>
              <td className="w-2/4 py-6">(406) 555-0120</td>
              <td className="w-2/4 py-6 edit-text">Edit</td>
              <td className="w-2/4 py-6 delete-text">Delete</td>
            </tr> */}
          </tbody>
        </table>
      </TeamContainer>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className="modalCenter__ miniModal"
        centered
        show={props.show}
        onHide={props.onHide}
        dialogClassName="br-4"
      >
        <Modal.Header className="modalHeader" closeButton>
          <h4>Invite Team</h4>
        </Modal.Header>
        <Modal.Body className="form__body">
          <form onSubmit={inviteTeamMate}>
            <div className="form-group">
              <label>Name:</label>
              <select
                defaultValue={"Select a user"}
                onChange={setNewEntryValues}
                className="form-control"
              >
                {newEntry.allUsers.length > 0 &&
                  newEntry.allUsers.map((user) => (
                    <option key={user?._id} value={user?._id}>
                      {user?.fullName} {user?.email}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-group center__content">
              <button type="submit" disabled={!newEntry.selectedUser}>
                Done
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Team;
