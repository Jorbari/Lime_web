import React from "react";
import Modal from "react-bootstrap/Modal";
import CustomButton from "../custom-button/custom-button.component";
import * as Style from "./execution-plan-modal.styles";

const ExecPlanModal = ({ showModal, onHide }) => {
  console.log(showModal);

  const addNewPlan = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {/* <Style.ModalContainer size={"lg"} center modalId show={showModal} onHide={onHide}>
            <Modal.Header className="modalHeader" closeButton>
                <h4>Execution Plan - New entry</h4>
            </Modal.Header>
            <Modal.Body>
                <Style.FormInput>
                    <label>Project Activity:</label>
                    <input
                        type="text"
                        name="item"
                        value={''}
                        onChange={null}
                    />
                </Style.FormInput>

                <Style.FormGroupRow>
                    <Style.FormInput>
                        <label>Start Date:</label>
                        <input
                            type="date"
                            name="start_date"
                            value={''}
                            onChange={null}
                        />
                    </Style.FormInput>

                    <Style.FormInput>
                        <label>End Date:</label>
                        <input
                            type="date"
                            name="end_date"
                            value={''}
                            onChange={null}
                        />
                    </Style.FormInput>
                </Style.FormGroupRow>

                <Style.FormInput>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="item"
                        value={''}
                        onChange={null}
                    />
                </Style.FormInput>

                <Style.FormInput>
                    <input
                        type="text"
                        name="item"
                        value={'Assign To Teammate'}
                        onChange={null}
                    />
                </Style.FormInput>
                <Style.DoneButton primary>Done</Style.DoneButton>
            </Modal.Body>
        </Style.ModalContainer> */}

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className="modalCenter__"
        size={"lg"}
        center
        modalId
        show={showModal}
        onHide={onHide}
      >
        <Modal.Header className="modalHeader" closeButton>
          <h4>Execution Plan - New entry</h4>
        </Modal.Header>
        <Modal.Body className="form__body">
          <form onSubmit={addNewPlan}>
            <div className="form-group">
              <label>Project Activity:</label>
              <input type="text" name="item" className="form-control" />
            </div>
            <div className="grid__2">
              <div className="form-group">
                <label>Start Date:</label>
                <input type="date" name="date" className="form-control" />
              </div>
              <div className="form-group">
                <label>End Date:</label>
                <input type="date" name="date2" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label>Description:</label>
              <input type="test" name="description" className="form-control" />
            </div>
            <div className="form-group">
              {/* <label>A:</label> */}
              <input
                type="test"
                name="description"
                className="form-control"
                value={"Assign To Teammate"}
              />
            </div>
            <div className="form-group center__content">
              <button type="submit" disabled={true}>
                Done
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ExecPlanModal;
