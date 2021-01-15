import React, { useState, useEffect } from "react";
import ConfirmationBox from "../../components/confirmation-box/confirmationBox";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import {
  getAllUsers,
  getTeamMember,
  addTeamMember,
  removeTeamMember,
} from "../../api/project";
import Notifier from "../../components/Notifier/notifier.component";
// import profileImage from "../../assets/profileImage.png";

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
  .rounded-full {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
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
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [teamMates, setTeamMates] = useState([]);
  const [selectedTeamMemberShipId, setSelectedTeamMemberShipId] = useState("");

  const [open, setOpen] = useState(false);
  const [apiMessageFeedback, setApiMessageFeedback] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getAllAppUsers = async () => {
      try {
        const data = await getAllUsers();
        setAllUsers(data.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    const get_team_members = async () => {
      try {
        const data = await getTeamMember(props.project._id);
        setTeamMates(data.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllAppUsers();
    get_team_members();
  }, []);

  const inviteTeamMate = async (event) => {
    event.preventDefault();

    try {
      const data = await addTeamMember(props.project._id, selectedUser);
      setTeamMates([...teamMates, data.data.data]);
      setSelectedUser("");
      setApiMessageFeedback(
        `successfully added ${data.data.data.name} as a team-mate`
      );
      setOpen(true);
      props.onHide();
    } catch (err) {
      console.log(err);
    }
  };

  const removeTeamMate = async () => {
    try {
      const data = await removeTeamMember(selectedTeamMemberShipId);
      const index = teamMates.findIndex(
        (x) => x._id == selectedTeamMemberShipId
      );
      teamMates.splice(index, 1);
      setApiMessageFeedback("Team-mate successfully removed");

      setSelectedTeamMemberShipId("");
      setShow(false);
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const setNewEntryValues = (event) => {
    setSelectedUser(event.target.value);
  };

  const triggerDeleteModal = (id) => {
    setSelectedTeamMemberShipId(id);
    setShow(true);
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
            {teamMates.length > 0 &&
              teamMates.map((team) => (
                <tr className="table-border" key={team?._id}>
                  <td className="w-2/4 py-6">
                    <input
                      type="checkbox"
                      className="appearance-none checked:bg-gray-900 checked:border-transparent ..."
                    />
                  </td>
                  <td className="w-2/4 py-6">
                    <div className="flex__">
                      <img
                        src={team?.imageUrl}
                        alt=""
                        className="rounded-full"
                      />
                      <p className="profile-cell-text">{team?.name}</p>
                    </div>
                  </td>
                  <td className="w-2/4 py-6">{team?.email}</td>
                  <td className="w-2/4 py-6">{team?.mobile}</td>
                  <td className="w-2/4 py-6 edit-text">Edit</td>
                  <td
                    className="w-2/4 py-6 delete-text"
                    onClick={() => triggerDeleteModal(team?._id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
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
                {allUsers.length > 0 &&
                  allUsers.map((user) => (
                    <option key={user?._id} value={user?._id}>
                      {user?.fullName} {user?.email ? `(${user?.email})` : ""}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-group center__content">
              <button type="submit" disabled={!selectedUser}>
                Done
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <ConfirmationBox
        title="Delete project"
        buttonMessage="Confirm Delete"
        handleClose={() => setShow(false)}
        confirm={() => removeTeamMate()}
        show={show}
      >
        Are you sure you want to remove team-mate?
      </ConfirmationBox>
    </>
  );
};

export default Team;
