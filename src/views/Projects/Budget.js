import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import {
  getProjectBudget,
  createProjectBudget,
  deleteProjectBudget,
  editProjectBudget,
} from "../../api/project";
import ConfirmationBox from "../../components/confirmation-box/confirmationBox";
import Notifier from "../../components/Notifier/notifier.component";
import "./Budget.css";

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

const Budget = (props) => {
  const { project } = props;

  const [newEntry, setNewEntry] = React.useState({
    item: "",
    unit: 1,
    unitCost: 0,
    amount: 0,
    editMode: false,
    id: "",
  });
  const [budgetData, setBudgetData] = React.useState([]);
  const [apiMessageFeedback, setApiMessageFeedback] = useState("");
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [deleteEntry, setDeleteEntry] = useState();

  const setNewEntryValues = (event) => {
    if (event.target.name === "unit" || event.target.name === "unitCost") {
      event.target.name === "unit"
        ? setNewEntry({
            ...newEntry,
            [event.target.name]: event.target.value,
            amount: event.target.value * newEntry.unitCost,
          })
        : setNewEntry({
            ...newEntry,
            [event.target.name]: event.target.value,
            amount: newEntry.unit * event.target.value,
          });
    } else {
      setNewEntry({
        ...newEntry,
        [event.target.name]: event.target.value,
      });
    }
  };

  useEffect(() => {
    const val = async () => {
      const data = await getProjectBudget(`${project._id}`);

      if (data.data) {
        setBudgetData(data.data.data);
      }
    };

    val();
  }, []);

  const newBudgetEntry = async (event) => {
    event.preventDefault();

    const payload = {
      item: newEntry.item,
      unit: parseInt(newEntry.unit),
      cost: parseInt(newEntry.unitCost),
      amount: newEntry.amount,
    };

    if (!newEntry.editMode) {
      const result = await createProjectBudget(project._id, payload);
      if (result.status === 200) {
        setOpen(true);
        setApiMessageFeedback("Budget entry successfully added !!!");
        props.onHide();
        setNewEntry({
          ...newEntry,
          item: "",
          unit: 0,
          unitCost: 0,
          amount: 0,
        });
        setBudgetData([...budgetData, result.data.data]);
      } else {
        setOpen(true);
        setApiMessageFeedback("An error occurred, please try again !!!");
        props.onHide();
      }
    } else {
      const result = await editProjectBudget(newEntry.id, payload);
      if (result.status === 200) {
        setOpen(true);
        setApiMessageFeedback("Budget successfully edited !!!");
        props.onHide();
        setNewEntry({
          ...newEntry,
          item: "",
          unit: 0,
          unitCost: 0,
          amount: 0,
          editMode: false,
          id: "",
        });
        setBudgetData([...budgetData, result.data.data]);
      } else {
        setOpen(true);
        setApiMessageFeedback("An error occurred, please try again !!!");
        props.onHide();
      }
    }
  };

  const editBudgetEntry = (data) => {
    setNewEntry({
      ...newEntry,
      item: data.item,
      unit: data.unit,
      unitCost: data.cost,
      amount: data.amount,
      editMode: true,
      id: data._id,
    });
    props.openDialog();
  };

  const handleClick = () => {
    setOpen(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setShow(true);
    setDeleteEntry(data);
  };

  const DeleteBudgetEntry = async () => {
    const data = await deleteProjectBudget(`${deleteEntry._id}`);

    if (data.status === 200) {
      const findIndex = budgetData.findIndex((x) => x._id === deleteEntry._id);
      budgetData.splice(findIndex, 1);
      setOpen(true);
      setApiMessageFeedback(`successfully deleted ${deleteEntry.item} !!!`);
    }
    handleClose();
  };

  return (
    <>
      <Notifier
        open={open}
        handleClick={() => handleClick()}
        message={apiMessageFeedback}
      />

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
            {budgetData.length > 0 ? (
              budgetData?.map((data, index) => (
                <tr className="table-border" key={index + 1}>
                  <td className="w-2/4 py-6">{index}</td>
                  <td className="w-2/4 py-6">{data?.item}</td>
                  <td className="w-2/4 py-6">{data?.unit}</td>
                  <td className="w-2/4 py-6">{data?.cost}</td>
                  <td className="w-2/4 py-6">{data?.amount}</td>
                  <td
                    className="w-2/4 py-6 edit-text"
                    onClick={() => editBudgetEntry(data)}
                  >
                    Edit
                  </td>
                  <td
                    className="w-2/4 py-6 delete-text"
                    onClick={() => handleShow(data)}
                  >
                    Delete
                  </td>
                </tr>
              ))
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </BudgetContainer>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className="modalCenter__"
        centered
        show={props.show}
        onHide={props.onHide}
      >
        <Modal.Header className="modalHeader" closeButton>
          <h4>Budget - New entry</h4>
        </Modal.Header>
        <Modal.Body className="form__body">
          <form onSubmit={newBudgetEntry}>
            <div className="form-group">
              <label>Item:</label>
              <input
                type="text"
                name="item"
                className="form-control"
                value={newEntry.item}
                onChange={setNewEntryValues}
              />
            </div>
            <div className="grid__2">
              <div className="form-group">
                <label>Unit:</label>
                <input
                  type="number"
                  name="unit"
                  className="form-control"
                  value={newEntry.unit}
                  onChange={setNewEntryValues}
                />
              </div>
              <div className="form-group">
                <label>Unit cost:</label>
                <input
                  type="number"
                  name="unitCost"
                  className="form-control"
                  value={newEntry.unitCost}
                  onChange={setNewEntryValues}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Amount:</label>
              <h3>{newEntry.amount}</h3>
            </div>
            <div className="form-group center__content">
              <button
                type="submit"
                disabled={
                  !newEntry.item || !newEntry.unit || !newEntry.unitCost
                }
              >
                Done
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <ConfirmationBox
        title="Remove Team-mate"
        buttonMessage="Confirm Delete"
        handleClose={() => handleClose()}
        confirm={() => DeleteBudgetEntry()}
        show={show}
      >
        Are you sure you want to delete this project?
      </ConfirmationBox>
    </>
  );
};

export default Budget;
